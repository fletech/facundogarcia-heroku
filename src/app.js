const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const mainRouterAr = require('./routes/mainAr');
const mainRouterEn = require('./routes/mainEn');
const mainRouter = require('./routes/main');


app.use(require('body-parser').urlencoded({ extended: false }));

//////////////        View Engine : EJS        //////////////
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

//////////////        PUBLIC        //////////////
app.use(express.static(path.join(__dirname, '../public')));


//////////////        Routers        //////////////

app.use('/', mainRouter);
app.use('/en', mainRouter);
app.use('/ar', mainRouter);

//////////////        Routers con POST       //////////////

let newsletter = fs.readFileSync(path.join(__dirname ,'./database/newsletter.json'), 'utf8');
newsletter = JSON.parse(newsletter)
console.log(newsletter)

app.post('/', function (req, res){
  newsletter.push(req.body);
  fs.writeFileSync(path.join(__dirname ,'./database/newsletter.json'), JSON.stringify(newsletter, null , 4) );
  let saludo = req.body.name.split(' ')[0];
  return res.send(`Muchas gracias ${saludo}, estaremos enviandote novedades pronto!!`);
  console.log(newsletter)
});


//////////////        Puerto: 3000        //////////////
   
app.listen(process.env.PORT || 3000, function(){
  console.log('Server running at http://localhost:3000/')
})


module.exports = app