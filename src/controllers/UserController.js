const User = require('../models/User')
const bcrypt = require('bcrypt')
const yup = require('yup');

module.exports = {
  async create(req,res){
    const { email, password } = req.body;
    const schema = yup.object().shape({
      email: yup.string()
      .min(4)  
      .email(),
      password: yup.string().min(4),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    let hasUser = await User.findOne({ email });
    if(hasUser) return res.status(403).send({ error:"Usuário já cadastrado!"});
    const isValidPass = () => /.{6,30}/.test(password);
    if (!isValidPass(password)) return res.status(403).send('Senha deve ter entre 6 e 30 caracteres');
    let hashPassword = await bcrypt.hash(password, 10);
    let user = new User({...req.body, password:hashPassword});
    user.save();
    return res.send(user)
  },

  async users(req,res){
    let users = await User.find()
    return res.json(users);
  },

  async remove(req,res){
    const { _id } = req.params;
    await User.findByIdAndDelete({_id})
    return res.status(200).json("Usuário excluido com sucesso!");
  },

  async update(req,res){
    const { _id } = req.params;
    let user = await User.findByIdAndUpdate(_id, {...req.body})
    user.save()
    return res.status(200).json(user);
  }
}