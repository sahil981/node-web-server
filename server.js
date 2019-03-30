const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'Sahil',
        college: 'NIT Hamirpur '
    });
});


app.get('/bad', (req, res)=> {
   res.send({
       errorMessage: 'Page not found !!'
   });
});
app.listen(3000);