import mongoose from 'mongoose';

export const CandidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  cpf: String,
  graduation_course_name: String,
  graduation_institution_name: String,
  year_of_formation: String,
  resources: String,
});

export default mongoose.model('Candidate', CandidateSchema);
