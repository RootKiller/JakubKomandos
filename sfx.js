// play main theme :D

var audio = new Audio("assets/audio/theme.mp3");
audio.play();
audio.loop = true;

function playOneShot(file) {
	var oneshot = new Audio("assets/audio/sfx/"+file);
	oneshot.play();
}


// eof
