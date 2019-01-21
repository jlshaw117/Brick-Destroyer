
class Bullet {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 15;
        this.speed = -1;
    }

    draw(screen) {
        screen.fillStyle = 'blue';
        screen.fillRect(x, y, width, height);
        screen.arc(x + (width / 2), y, width / 2 - 0.5, 0, Math.PI, true);
        screen.arc(x + (width / 2), y + height, width / 2 - 0.5, 0, Math.PI, false);
        screen.stroke();
        screen.fill();
    } 
}

export default Bullet;