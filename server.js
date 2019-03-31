const express = require('express');
const hbs = require('hbs');
const fs  = require('fs');
const port = process.env.PORT || 3000;

var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=> {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err){
            console.log('Failed to log');
        }
    });
    next();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

app.get('/', (req, res) => {
    res.send({
        name: 'Sahil',
        college: 'NIT Hamirpur '
    });
});

app.get('/about', (req, res)=> {
    res.render('about.hbs', {
        pageTitle : 'Test Enjection'
    });
});


app.get('/bad', (req, res)=> {
   res.send({
       errorMessage: 'Page not found !!'
   });
});
app.listen(port);