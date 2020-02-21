const User = require('../models/User')
const Session = require('../models/Session')
const jwt = require( 'jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET_TOKEN }  =  require('../config/secretToken');
const yup = require('yup');

module.exports = {
  async create(req,res){
    const { email, password } = req.body;
    const schema = yup.object().shape({
      email: yup.string() .min(4).email(),
      password: yup.string().min(4),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    let hasUser = await User.findOne({ email });
    if(!hasUser) return res.status(403).send({ error:"Usuário não encontrado!"});
    let validPassword = await bcrypt.compare(password, hasUser.password);
    if(!validPassword) return res.status(401).send({ error:"Senha invalida!"});
    let session = new Session({email,password});
    session.jwt = jwt.sign({ token: session._id, type:hasUser.type }, SECRET_TOKEN)
    session.save()
    return res.status(200).send(session)
  },
}