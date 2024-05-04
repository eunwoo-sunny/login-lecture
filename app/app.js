 
// module
const express = require('express')  
const app = express();


// routing
const home = require('./src/routes/home/index')

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결하는 것이
// {extended:true} 이다.

// registering middleware;
app.use('/', home); // use() is a method of registering middleware;

module.exports = app;                                                                                                                  