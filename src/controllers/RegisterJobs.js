import yup from 'yup';
import RegisterJobs from '../models/RegisterJobs';

export default {
  async create(req, res) {
    const { name_jobs } = req.body;
    const schema = yup.object().shape({
      name_jobs: yup.string()
        .min(4)
        .test({
          message: 'Senha invalida!',
        }),
      description: yup.string(),
      date_limite: yup.string().min(4),
      number_jobs: yup.string(),
      candidate_id: yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    const hasJob = await RegisterJobs.findOne({ name_jobs });
    if (hasJob) return res.status(403).send({ error: 'Vaga já cadastrada!' });
    const job = new RegisterJobs(req.body);
    job.save();
    return res.status(200).send(job);
  },

  async jobs(req, res) {
    const jobs = await RegisterJobs.find().populate('candidate_id');
    return res.status(200).json(jobs);
  },

  async remove(req, res) {
    const { _id } = req.params;
    const schema = yup.object().shape({
      _id: yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    await RegisterJobs.findByIdAndDelete({ _id });
    return res.status(200).json('Vaga excluida com sucesso!');
  },

  async update(req, res) {
    const { _id } = req.params;
    const schema = yup.object().shape({
      _id: yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    const job = await RegisterJobs.findByIdAndUpdate(_id, { ...req.body }).populate('candidate_id');
    job.save();
    return res.status(200).json(job);
  },

  async toAssignCandidate(req, res) {
    const { job_id, candidate_id } = req.body;
    const schema = yup.object().shape({
      job_id: yup.string(),
      candidate_id: yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send({ error: 'Erro de Validação!' });
    }
    const job = await RegisterJobs.findOne({ _id: job_id });
    if (!job) return res.status(403).send({ error: 'Vaga não encontrada!' });
    job.candidate_id.push(candidate_id);
    job.save();
    return res.status(200).json(job);
  },
};
