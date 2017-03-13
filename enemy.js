var enemies = [];
var spawnCooldown = 0.0;
var difficulty = 1;

var enemySprites = [];
var tmp = new Image();
tmp.src = "assets/enemy.png";
enemySprites.push(tmp);

var tmp = new Image();
tmp.src = "assets/enemy2.png";
enemySprites.push(tmp);

var ENEMY_SHOT_COOLDOWN = 0.6;
class Enemy
{
	constructor(theSprite, spawnX) {
		this.hp = 100.0;
		this.lastVisualHp = this.hp;

		this.alive = true;

		this.x = spawnX;

		this.sprite = theSprite;

		this.shotCooldown = ENEMY_SHOT_COOLDOWN;	
	}

	tick(delta) {

		var distance = (this.x - player.x);	
		if (distance > 50) {
			this.x -= 100 * delta;
		}

		// if enemy is out of the screen kill him
		if (this.x < cameraX - 100) {
			this.alive = false;
			return;
		}

		this.shotCooldown -= delta;

	
		if ((distance < 1000) && (this.shotCooldown <= 0.0)) {
			spawnBullet(this.x - cameraX, GROUND_START - this.sprite.height + 40, false);
			this.shotCooldown = ENEMY_SHOT_COOLDOWN
		}
	}

	draw(context) {
		var y = GROUND_START - this.sprite.height;
		if (this.lastVisualHp != this.hp) {
			context.fillStyle = "red";
			context.textAlign = "center";
			context.fillText("HIT!", this.x - cameraX, y - 10); 
			this.lastVisualHp  = this.hp;
		}

		context.drawImage(this.sprite, this.x - cameraX, y);
	}

	getBoundingBox() {
		return {x: this.x - cameraX, y: GROUND_START - this.sprite.height, w: this.sprite.width, h: this.sprite.height};
	}

	hit() {
		this.hp -= 10;
		if (this.hp <= 0) {
			this.alive = false; // kill in next tick
			player.score += 1;
		}
	}
}

function tickEnemies(tick) {
	// handle spawn
	spawnCooldown -= tick;
	if (spawnCooldown < 0.0 && enemies.length<1) {
		var idx = Math.floor(Math.random()*enemySprites.length); // select random sprite
		enemies.push(new Enemy(enemySprites[idx], player.x + 1300));//todo more sprites
		spawnCooldown = 5.0 / difficulty;
	}
	difficulty += 2.0 * tick;

	// handle lifetime of enemies

	for (var i = 0; i < enemies.length; ) {
		enemies[i].tick(tick);

		if (!enemies[i].alive) {
			enemies.splice(i, 1);
			continue;
		}

		++i;
	}
}

function drawEnemies(context) {
	for (var i = 0; i < enemies.length; ++i) {
		enemies[i].draw(context);		
	}
}

