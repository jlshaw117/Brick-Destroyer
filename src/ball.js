class Ball {

    constructor(radius, startX, startY) {
        this.x = startX;
        this.y = startY;
        this.dx = 0;
        this.dy = 0;
        this.speed = 2;
        this.radius = radius;
    }

    draw(screen) {
        screen.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        screen.fill();
    }

    move(newX, newY) {

    }
}

export { Ball };