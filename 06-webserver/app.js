require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express();
const port = process.env.PORT;

//Require hbs handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', (err) =>{ console.log(err)});



//Servir contenido estatico
app.use(express.static('public'))


app.get('/',(req, res) => {
    res.render('home', {
        nombre: 'José Villa',
        titulo: 'Curso de Node'
    });
});

app.get('/generic',(req, res) => {
    res.render('generic', {
        nombre: 'José Villa',
        titulo: 'Curso de Node'
    });
});

app.get('/elements',(req, res) => {
    res.render('elements', {
        nombre: 'José Villa',
        titulo: 'Curso de Node'
    });
});


app.listen(port, ()=>{
    console.log(`Ingresar en: http://localhost:${port}`)
});