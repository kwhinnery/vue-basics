'use strict';

const path = require('path');
const express = require('express');
const app = express();

// Configure view engine and views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Let express serve static assets
const staticPath = path.join(__dirname, '..', '..', 'public');
app.use(express.static(staticPath));

// Render home page
app.get('/', (request, response) => {
  response.render('index');
});

// Export Express webapp instance
module.exports = app;
