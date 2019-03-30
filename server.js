const express = require('express');
const hbs = require('hbs')

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'Sahil',
        college: 'NIT Hamirpur '
    });
});

app.get('/about', (req, res)=> {
    res.render('about.hbs', {
        pageTitle : 'Test Enjection',
        year : new Date().getFullYear()
    });
});


app.get('/bad', (req, res)=> {
   res.send({
       errorMessage: 'Page not found !!'
   });
});
app.listen(3000);