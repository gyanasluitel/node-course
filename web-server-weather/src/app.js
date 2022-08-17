const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDir));

const port = 3000;

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Gyanas Luitel',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Gyanas Luitel',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    help: 'Please provide me help.',
    title: 'Help',
    name: 'Gyanas Luitel',
  });
});

app.get('/help/*', (req, res) => {
  res.render('notFound', {
    pageType: 'Help article',
    title: '404',
    name: 'Gyanas',
  });
});

app.get('*', (req, res) => {
  res.render('notFound', {
    pageType: 'Page',
    title: '404',
    name: 'Gyanas',
  });
});

// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: '50 degrees',
//     location: 'Africa',
//   });
// });

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
