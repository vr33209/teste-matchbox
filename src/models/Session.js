import mongoose from 'mongoose';

export const SessionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  jwt: {
    type: String,
    required: true,
  },
});
export default mongoose.model('Session', SessionSchema);
