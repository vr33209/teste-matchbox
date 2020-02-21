import mongoose from 'mongoose';

export const RegisterJobsSchema = new mongoose.Schema({
  name_jobs: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date_limite: {
    type: Date,
    required: true,
  },
  number_jobs: {
    type: Number,
    required: true,
  },
  candidate_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
    required: true,
  }],
});
export default mongoose.model('RegisterJobs', RegisterJobsSchema);
