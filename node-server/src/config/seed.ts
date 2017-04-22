'use strict';
var co = require('co');
var User = require('../api/user/user.model')


co(function*(){
    try{
        yield User
        .find({})
        .remove();
        console.log('Removed!')


        yield User.create({
            name: 'Alex',
            email: 'alexhgian@gmail.com',
            password: 'pass'
        })
    } catch(err){
        console.error('Error during seeding:', err);
    }
})
