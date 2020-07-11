//accesing the models
require('./models/db');

//
const express = require('express');
//to able the views join become one
const path = require('path');
//provide the engine to set views
const exphbs = require('express-handlebars');
//to parse the POST data to body request
const bodyparser = require('body-parser');

//calling dependecies for pdf
const fs = require("fs");
const PDFDocument = require("pdfkit");
const doc = new PDFDocument();

const customerpoController = require('./controllers/customerpoController');
const siteController = require('./controllers/siteController');
const deliverableController = require('./controllers/deliverableController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/customerpo', customerpoController);
app.use('/site', siteController);
app.use('/deliverable', deliverableController);
