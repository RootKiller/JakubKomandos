
function testBulletCollision(bulletX, bulletY, object)
{
	var bb = object.getBoundingBox();
	return (bulletX >= bb.x) && (bulletX <= (bb.x + bb.w)) && (bulletY >= bb.y) && (bulletY <= (bb.y + bb.h));
}
