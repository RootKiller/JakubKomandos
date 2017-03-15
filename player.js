

class Player
{

	constructor()
	{
		this.walkSprite = new Image();
		this.walkSprite.src = "assets/player.png";

		this.crouchSprite = new Image();
		this.crouchSprite.src = "assets/playerCrouch.png";

		this.h = 110;

		this.respawn();
	}

	tick(delta)
	{
		this.handleInput();
		this.handleMovement(delta);
		this.handleShoting(delta);
	}

	getBoundingBox() {
		return {x: this.x - cameraX, y: this.y, w: this.walkSprite.width, h: this.walkSprite.height};
	}

	render(context)
	{
		// console.log("Render player");

		var sprite = this.walkSprite;
		if (this.doCrouch) {
			sprite = this.crouchSprite;
		}

		context.drawImage(sprite, this.x - cameraX, this.y);
	}

	handleInput()
	{
		//this.goLeft = isKeyPressed(65) || isKeyPressed(37); // A | left
		this.goRight = isKeyPressed(68) || isKeyPressed(39); // D | right
		this.doShot = isMouseButtonPressed(0); // left mouse button
		this.doJump = isKeyPressed(32); // left shift
		this.doCrouch = isKeyPressed(17); // left control
	}

	handleMovement(delta)
	{
		//console.log("I'm going " + (this.goLeft?"left":"") + ", " + (this.goRight?"right":""));

		var speed = 120.0;
		if (this.doCrouch) {
			speed *= 0.70; // 30% nerf to speed when crouching
		}

		if (this.goRight) {
			this.vx = speed;
		}
		else {
			this.vx = 0;
		}
		this.x += this.vx * delta; 


		cameraX = this.x - 50;

		this.y += this.vy * delta;
		this.vy += 20;
		this.isOnGround = this.y + this.h > GROUND_START;

		if (this.doJump && this.isOnGround) {
			this.isOnGround = false;

			this.vy = -550.0;
		}

		if (this.isOnGround) {
			this.y = GROUND_START - this.h;
			this.vy = 0;
		}
	}

	handleShoting(delta)
	{
		this.shotCooldown -= delta;
		if (this.shotCooldown > 0) {
			return;
		}
		if (this.doShot) {
			var offset = 60;
			if (this.doCrouch) {
				offset = 75;
			}

			spawnBullet(this.x + 45 - cameraX, this.y + offset, true);
			this.shotCooldown = 0.25;
		}
	}

	hit()
	{
		this.hp -= 10;
		if (this.hp <= 0) {
			state = STATE_GAMEOVER;
			// game over score
		}
	}

	respawn() {
		this.x = 0;
		this.y = 30;

		this.vx = 0;
		this.vy = 0;

		this.goLeft = false;
		this.goRight = false;
		this.doShot = false;
		this.doCrouch = false;

		this.shotCooldown = 0;

		this.isOnGround = true;

		this.hp = 100.0;
		this.score = 0;
	}
}

var player = new Player();

//eof
