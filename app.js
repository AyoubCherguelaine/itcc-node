// Import the necessary modules
const express = require('express');
const path = require('path');


// Create an Express.js app
const app = express();

// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define the routes
app.get('/', (req, res) => {
  res.render('Home')
});

app.get("/Event",(req,res)=>{
    res.render('Event')
})

app.get("/Community",(req,res)=>{
    res.render('Community')
})

app.get("/last",(req,res)=>{
    res.render('Last_Edition')
})
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
