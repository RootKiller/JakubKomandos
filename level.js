var GROUND_HEIGHT = 150;
var GROUND_START = h-GROUND_HEIGHT;


var tree = new Image();
tree.src="assets/drzewo1.png";

var bush = new Image();
bush.src="assets/krzak.png";

var sun = new Image();
sun.src = "assets/sun.png";

// spawn objects - new ones will be spawned when player will walk
var objects = [];
var objectSprites = [tree,bush];

function placeObject(x)
{
	var idx = Math.floor(Math.random()*objectSprites.length); // select random sprite
	var sprite = objectSprites[idx];

	objects.push([sprite, x]);
}

function generateSpawnPoint()
{
	objects = [];

	for (var generator = 0; generator < 10; ++generator) {
		placeObject(generator * 200 + Math.random() * 500);
	}
}

generateSpawnPoint();



var nextObjectDiff = 100;

function generateVegetation(tick)
{
	if ((objects.length > 0) && (objects[0][1] < cameraX - 100 - objects[0][0].width)) {
		objects.splice(0, 1);
	}

	var x = cameraX + 1500 + Math.random() * 200;

	if (objects.length > 0) {
		if ((x - objects[objects.length - 1][1]) < 200) {
			return;
		}
	}

	placeObject(x);
}

function drawLevel(context) {
	context.fillStyle="#340000";
	context.fillRect(0, GROUND_START, w, GROUND_HEIGHT);

	for (var i = 0; i < objects.length; ++i) {
		var sprite = objects[i][0];
		context.drawImage(sprite, objects[i][1] - cameraX, GROUND_START - sprite.height);
	}

	context.drawImage(sun, w - 150, 50);
}
