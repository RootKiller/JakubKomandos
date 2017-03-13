
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var lastTick = 0;

function clear(color)
{
	context.fillStyle = color;
	context.fillRect(0, 0, w, h);
}

var warp = 1.0;



function tick(timestamp) {
	var delta = (timestamp - lastTick) / 1000; // delta in seconds
	delta *= warp;
	lastTick = timestamp;

	switch (state) {
	case STATE_GAMEOVER:
		drawGameOver(context);
		break;

	case STATE_INGAME:
		{
			// logic
			player.tick(delta);
			tickBullets(delta);
			tickEnemies(delta);
			tickHud(delta);
			generateVegetation();

			// rendering

			clear("#82E1FF");

			drawLevel(context);
			player.render(context);
			renderBullets(context);
			drawEnemies(context);
			drawHud(context);
		}
		break;

	case STATE_INTRO:
		{
			clear("black");

			tickAndDrawIntro(context, delta);
		}
		break;
	}

	window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);



