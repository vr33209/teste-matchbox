import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
const app = express();
require('dotenv').config()
const { PASSWORD_BANK, USER_BANK } = process.env;

mongoose.connect(`mongodb+srv://${USER_BANK}:${PASSWORD_BANK}@cluster0-qmbxi.mongodb.net/test?retryWrites=true&w=majority`,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
app.use(express.json());
app.use(routes);
app.listen(3000);