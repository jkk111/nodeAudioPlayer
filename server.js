var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var shortid = require('shortid');
var port=3000;
var room=shortid.generate();

app.get('/', function(req, res){
	res.sendFile(__dirname+'/static/index.html');
});

//serve slave or master pages
app.get('/master', function(req, res){
	res.sendFile(__dirname+'/static/master.html');
});

//Apache server serves static content
app.get('/static/:name', function(req, res){
	res.redirect("http://john-kevin.me/static/"+req.params.name);
});

//User uploads - tracks & pics
app.get('/user/:name', function(req, res){
	res.sendFile(__dirname+"/user/"+req.params.name);
});

io.on('connection', function(socket){
	//Connection on join set user room
	//if user responds with a room change room
	socket.room = shortid.generate();
	socket.broadcast.to(socket.id).emit('handshake', socket.room);
	socket.join(socket.room);
	io.to(socket.room).emit('id',socket.room);
	socket.on('room', function(msg){
		socket.leave(socket.room);
		socket.join(msg);
		socket.room=msg;
		io.to(socket.room).emit('id',socket.room);
	});

	//Send command to room
	socket.on('master',function(msg){
		console.log(msg);
		if(msg=="/play")
			msg="#play";
		else if(msg=="/stop")
			msg="#stop";
		else if(msg=="/destroy")
			msg="#destroy";
		else(msg=null);
		if(msg!=null)
			io.to(socket.room).emit('command', msg);
	});

	socket.on('disconnect',function(socket){

	});
});

//Start listening on 'port'
http.listen(port, function(){
	console.log('listening on *:'+port);
});