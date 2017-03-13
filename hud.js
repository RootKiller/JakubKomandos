
var sessionTime = 0;

function tickHud(delta)
{
	sessionTime += delta;
}

function drawHud(context)
{
	context.fillStyle = "black";
	context.fillRect(60, 10, 100, 20);

	context.fillStyle = "red";
	context.fillRect(60, 10, 100 * (player.hp/100), 20);

	context.font = "15px Comic Sans MS";
	context.fillStyle = "black";
	context.textAlign = "left";
	context.fillText("Życie", 10, 25); 

	context.textAlign = "right";
	context.fillText("Punkty: " + player.score, w - 10, 25); 

	context.textAlign = "center";
	context.fillText("Czas: " + Math.floor(sessionTime/60) + "min " + Math.floor(sessionTime%60) + "sek", w/2, 25); 

}

// eof
