'use strict';

var path = require('path');
var koa = require('koa');

var mongoose = require('mongoose');

var config = require('./config/environment');

// interface Person {
//     firstName: string;
//     lastName: string;
// }
//
// function hello(p: Person){
//     if(typeof p.firstName === 'string')
//         console.log('Person: ', p.firstName);
// }
//
// hello({firstName:'alex', lastName: 'gian'});

mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { console.log('seeding...'); require('./config/seed'); }

// The app
var app = new koa();


require('./config/server')(app);
require('./routes')(app);

app.listen(config.port);
