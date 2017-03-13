// look at the end of the file for public api
var KEY_COUNT = 256;
var keyState = new Array(KEY_COUNT);
for(var i = 0; i < KEY_COUNT; i++) keyState[i] = false;

window.onkeydown = function(e)
{
	if (e.keyCode >= KEY_COUNT) return false;
	console.log("You pressed" + e.keyCode);
	keyState[e.keyCode] = true;	
	return false;
}

window.onkeyup = function(e)
{
	if (e.keyCode >= KEY_COUNT) return false;
	keyState[e.keyCode] = false;	
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
