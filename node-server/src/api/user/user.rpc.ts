var path = require('path');
var grpc = require('grpc');

var PP = path.resolve(__dirname + '/user.proto');
var userProto = grpc.load(PP).user;

var User = require('./user.model');

module.exports = function(server){
    server.addProtoService(userProto.Greeter.service, {sayHello: sayHello});
}

function sayHello(call, callback) {
    User.findOne({}).exec().then(function(data){
         callback(null, {message: 'Hello ' + data.name });
    });
}
