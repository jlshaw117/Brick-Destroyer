
class Bullet {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 5;
        this.height = 15;
        this.speed = -3;
    }

    draw(screen) {
        screen.beginPath();
        screen.fillStyle = 'rgb(84, 185, 38)';
        screen.fillRect(this.x + 3, this.y, this.width, this.height);
        screen.arc(this.x + 3 + (this.width / 2), this.y, this.width / 2 - 0.5, 0, Math.PI, true);
        screen.arc(this.x + 3 + (this.width / 2), this.y + this.height, this.width / 2 - 0.5, 0, Math.PI, false);
        screen.stroke();
        screen.fill();
        screen.closePath();
    } 
}

export default Bullet;