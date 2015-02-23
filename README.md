# nodeAudioPlayer
Node multiclient audio player

Uses HTML5 audio and nodejs to create a multiclient audio player for synchronised listening.

Works by using socket.io and a master to send messages between the node server and the clients.

currently running at http://john-kevin.me:3000 for clients and http://john-kevin.me:3000/master for the master server

append ?room=*room ID" to join a specific room

Controls are as follows

/play - plays the loaded track (currently only skyrim theme will expand for user uploads)

/stop - stops the track playing

/destroy - destroys the html on all clients pages
<<<<<<< HEAD

# Requirements
NodeJS
	-SocketIO

	-shortID
	
	-Express
=======
>>>>>>> parent of fa4a90f... updated readme
