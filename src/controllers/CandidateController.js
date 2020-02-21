const Candidate = require('../models/Candidate')

module.exports = {
  async create(req,res){
    const { email } = req.body;
    const schema = yup.object().shape({
      email: yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    let hasCandidate = await Candidate.findOne({ email });
    if(hasCandidate) return res.status(403).send({ error:"Candidato já cadastrado!"});
    let candidate = new Candidate(req.body);
    candidate.save();
    return res.json(candidate);
  },

  async candidates(req,res){
    let candidates = await Candidate.find();
    return res.json(candidates)
  },

  async remove(req,res){
    const { _id } = req.params;
    const schema = yup.object().shape({
      _id: yup.string()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    await Candidate.findByIdAndDelete({_id})
    return res.status(200).json("Candidato excluido com sucesso!");
  },

  async update(req,res){
    const { _id } = req.params;
    const schema = yup.object().shape({
      _id: yup.string()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    let candidate = await Candidate.findByIdAndUpdate(_id, {...req.body})
    candidate.save()
    return res.status(200).json(candidate);
  },
}