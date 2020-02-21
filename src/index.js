const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://joao:joao123456@cluster0-qmbxi.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
app.use(express.json());
app.use(routes);
app.listen(3000);