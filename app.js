var EventEmitter = require('events')
var restify = require('restify')

var server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());


server.get("/keyboard", function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    var obj = {};
    obj.type = "text";
    res.end(JSON.stringify(obj));
    return next();
});

server.post("/message", function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    var obj = {};
    obj.message = {};
    obj.message.text = "hello! I am vinylc bot.";
    obj.keyboard = {};
    obj.keyboard.type = "text";
    res.end(JSON.stringify(obj));
    return next();
});

server.post("/friend", function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    res.end();
    return next();
});

server.del("/friend/:user_key", function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    res.end();
    return next();
});




var port = process.env.PORT || 80;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})