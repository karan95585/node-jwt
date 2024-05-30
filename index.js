const mongoose = require('mongoose');
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes.js');

const app = express();
app.use(bodyParser.json());

app.use('/', routes);


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
  app.listen(process.env.PORT, () => {
    console.log('Server started on port 3000');
  });
});