$(document).ready(function(){
	var track = document.getElementById("track");
	track.load();
	track.oncanplaythrough = function(){
		socket.emit('ready', '#ready');
	};

	var silentTrack = document.getElementById("silent");
	$("#startButton").click(function(){
		$("#startButton").css("display","none");
	});
	var height = $("#playingDisplay").height();
	var width = $("#playingDisplay").width();
	if(height>width){
		$("#playingDisplay").css("height",width+"px");
	}
	else{
		$("#playingDisplay").css("width",height+"px");
	}
});

$(document).resize(function(){
	var height = $("#playingDisplay").height();
	var width = $("#playingDisplay").width();
	if(height>width){
		$("#playingDisplay").css("height",width+"px");
	}
	else{
		$("#playingDisplay").css("width",height+"px");
	}
});