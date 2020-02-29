'use strict';

const path = require('path');
const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000; // on server || locally

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup static directory to serve
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    name: 'Jeff Ripke',
    pageTitle: 'Home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    name: 'Jeff Ripke',
    pageTitle: 'About Me'
  });
});

app.listen(port, () => {
  console.log(`server running at port http://localhost:${port}`);
});
