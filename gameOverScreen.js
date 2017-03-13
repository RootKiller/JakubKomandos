

function drawGameOver(context)
{
	clear("black");

	context.font = "30px Comic Sans MS";
	context.fillStyle = "red";
	context.textAlign = "center";

	context.fillText("Game over!", w / 2, 25); 
	context.fillStyle = "white";

	context.font = "15px Comic Sans MS";
	context.fillText("Punkty: " + player.score, w / 2, 100); 
	context.fillText("Czas rozgrywki: " + Math.floor(sessionTime/60) + "min " + Math.floor(sessionTime%60) + "sek", w / 2, 150); 

	context.font = "12px Comic Sans MS";
	context.fillText("Aby zagrać ponownie wciśnij ENTER", w / 2, h-100); 

	if (isKeyPressed(13)) { // enter = restart
		player.respawn();
		enemies = [];
		bullets = [];
		generateSpawnPoint();
		state = STATE_INGAME;
	}
}
