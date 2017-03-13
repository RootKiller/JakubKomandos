
var bullets = [];


function tickBullets(delta)
{
	for (var i = 0; i < bullets.length;) {
		var bullet = bullets[i];		

		var velocity = 300;
		if (! bullet.playerBullet) {
			velocity = -velocity;
		}

		bullet.x += velocity * delta;
		bullet.y += 10 * delta; // slow fall of the bullet
		if (bullet.y > GROUND_START) {
			// remove bullet
			bullets.splice(i, 1);
			continue;
		}

		var hit = false;

		if (bullet.playerBullet) {

			for (var e = 0; e < enemies.length; ++e) {
				var enemy = enemies[e];
				if (testBulletCollision(bullet.x, bullet.y, enemy)) {
					hit = true;
					enemy.hit();
					break;
				}
			}
		}
		else {

			// bullet vs player


			if (testBulletCollision(bullet.x, bullet.y, player)) {
				hit = true;
				player.hit();
			}
		}


		if (hit) {
			// remove bullet
			bullets.splice(i, 1);
			continue;
		}

		++i;
	}
}

function renderBullets(context)
{
	context.fillStyle = "yellow";

	for (var i = 0; i < bullets.length; ++i) {
		var bullet = bullets[i];
		context.fillRect(bullet.x, bullet.y, 10, 3);
	}
}


function spawnBullet(x,y,isShotByPlayer)
{
	bullets.push({x:x, y:y, playerBullet: isShotByPlayer});
}
