const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const userroutes = require('./routes/userRoutes');
const traderoutes = require('./routes/traderoutes');
const authroutes = require('./routes/authroutes');
const appdataroutes=require('./routes/appdataroutes');
const app = express();


mongoose.connect("mongodb+srv://mettalicadb-user:NOolsX1aPnTQPR6c@cluster0-kirqo.mongodb.net/mettalica-db?retryWrites=true")
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/users', userroutes);
app.use('/api/trades', traderoutes);
app.use('/api/user', authroutes);
app.use('/api/appdata',appdataroutes);
module.exports = app;
