const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/en/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home-en.html'))
})
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home-ar.html'))
   })

app.get('/ar/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home-ar.html'))
  })

app.get('/icon', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/images/SVG/fav-icon-2.svg'))
  })

const DIRECCION = path.join(__dirname, '/public/images/SVG/fav-icon-2.svg');
   

   
app.listen(process.env.PORT || 3000, function(){
  console.log('Server running at http://localhost:3000/')
})

//console.log(DIRECCION);