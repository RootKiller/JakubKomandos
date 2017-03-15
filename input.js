// look at the end of the file for public api
var KEY_COUNT = 256;
var keyState = new Array(KEY_COUNT);
for(var i = 0; i < KEY_COUNT; i++) keyState[i] = false;

window.onkeydown = function(e)
{
	if (e.keyCode >= KEY_COUNT) return false;
	//console.log("You pressed" + e.keyCode);
	keyState[e.keyCode] = true;	
	return false;
}

window.onkeyup = function(e)
{
	if (e.keyCode >= KEY_COUNT) return false;
	keyState[e.keyCode] = false;	
	return false;
}

var MOUSE_BUTTON_COUNT = 5;
var buttonState = new Array(MOUSE_BUTTON_COUNT);
for(var i = 0; i < MOUSE_BUTTON_COUNT; i++) buttonState[i] = false;

window.onmousedown = function(e)
{
	buttonState[e.button] = true;
	return false;
}

window.onmouseup = function(e)
{
	buttonState[e.button] = false;
	return false;
}

// public api
function isKeyPressed(key)
{
	if (key < KEY_COUNT) {
		return keyState[key];
	}
	return false;
}

function isMouseButtonPressed(btn)
{
	if (btn < MOUSE_BUTTON_COUNT) {
		return buttonState[btn];
	}
	return false;
}
