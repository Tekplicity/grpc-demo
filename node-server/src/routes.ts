var grpc = require('grpc');
module.exports = function(app){
    var Router = require('koa-router');

    // Base API Route
    var apiRoutes = new Router();

    // Routes
    var userRoutes = require('./api/user');
    apiRoutes.use('/api/user', userRoutes.routes(), userRoutes.allowedMethods());

    // Load all the routes nested in apiRoutes
    app.use(apiRoutes.routes());

    // Protos
    var server = new grpc.Server();
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());

    // Add services
    var userRPC = require('./api/user/user.rpc')(server);


    server.start();
}
