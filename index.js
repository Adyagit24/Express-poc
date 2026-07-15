const express = require('express');
const path = require('path');

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
  app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

 // GET route 
  app.get('/form', (req, res) => {
  res.render('form');
   });

// // POST route → handle form submission
    app.post('/submit', (req, res) => {
   const { fullName, email, age, favoriteColor } = req.body;

  // Pass data to result.ejs
 res.render('result', { fullName, email, age, favoriteColor });
 });

// Start server
app.listen(8000, () => {
  console.log('Server running at 8000');
});
