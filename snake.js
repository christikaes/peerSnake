$(document).ready(function(){
	console.log("Hello Snake");

	FPS = 60;

	setInterval(function(){
		update();
		draw();
	});

	var update = function(){
		console.log("update");
	}

	var draw = function(){
		console.log("draw")
	}


})