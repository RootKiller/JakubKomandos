function incl(src) {
	document.write("<script type=\"text/javascript\" src=\"" + src + "\"></script>")
}

var w = 1280, h = 720;

incl("states.js");
incl("utils.js");

// engine

incl("input.js");

incl("camera.js");

// audio

incl("sfx.js");

// game objects

incl("player.js");

incl("enemy.js");
incl("bullets.js");

incl("level.js");

incl("hud.js");
incl("gameOverScreen.js");

// game code


incl("intro.js");

incl("game.js");
