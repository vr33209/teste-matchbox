import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as yup from 'yup';
import User from '../models/User';
import Session from '../models/Session';
import { SECRET_TOKEN } from '../config/secretToken';

export default {
  async create(req, res) {
    const { email, password } = req.body;
    const schema = yup.object().shape({
      email: yup.string().min(4).email(),
      password: yup.string().min(4),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    const hasUser = await User.findOne({ email });
    if (!hasUser) return res.status(403).send({ error: 'Usuário não encontrado!' });
    const validPassword = await bcrypt.compare(password, hasUser.password);
    if (!validPassword) return res.status(401).send({ error: 'Senha invalida!' });
    const session = new Session({ email, validPassword });
    session.jwt = jwt.sign({ token: session._id, type: hasUser.type }, SECRET_TOKEN);
    session.save();
    return res.status(200).send({ session });
  },
};
