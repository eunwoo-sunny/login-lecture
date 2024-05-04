 
// module
const express = require('express') 
const app = express();


// routing
const home = require('./src/routes/home/index')

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

// registering middleware;
app.use('/', home); // use() is a method of registering middleware;

module.exports = app;