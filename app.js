
var restify = require('restify');
var builder = require('botbuilder');

var appId = process.env.MY_APP_ID || "Missing your app ID";
var appSecret = process.env.MY_APP_SECRET || "Missing your app secret";

// Create bot and add dialogs
var bot = new builder.BotConnectorBot
({appId, appSecret});
bot.add('/', function (session) {
session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
console.log('%s listening to %s', server.name, server.url);
});

//This is for an index.html home page
var express = require('express');
var app = express();
var http = require('http').Server(app);
//var port = process.env.PORT || 3000;
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
app.use(express.static(__dirname));
//redirecting, telling it to use the thing that's in the directory name 
//(should default to index.html)