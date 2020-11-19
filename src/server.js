'use strict'
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
let data = {};

app.set('views', 'src/views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '/views/css')));

(function(){
    data = JSON.parse(fs.readFileSync('src/data.json'));
})();

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Cheatsheet',
        message: 'It Works!',
        data: data
    });
});

app.listen(port, () => {
    console.log(`Cheatsheet app listening at http://localhost:${port}`);
});