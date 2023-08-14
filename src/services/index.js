const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express()
const port = 5000

mongoose.connect('mongodb+srv://rajvora1234567890:<password>@bookstore.1rwo8cb.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console,'Connection error:'));
db.once('open', ()=>{
    console.log('Connected to DB');
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})