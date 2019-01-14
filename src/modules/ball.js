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

    collisionWithWall(canvas) {
        if (this.x + (this.dx * this.speed) > canvas.width - this.radius || this.x + (this.dx * this.speed) < this.radius) {
            this.dx = -this.dx;
        } 
    }

    collisionWithTop() {
        if (this.y + (this.dy * this.speed) < this.radius) {
            this.dy = -this.dy;
        }
    }

    collisionWithPaddle(paddle) {
        if (this.y + (this.dy * this.speed) > paddle.y - this.radius && this.x > paddle.x && this.x < paddle.x + paddle.width) {
            this.speed += 0.2;
            this.dy = -this.dy;
            this.calculateTraj(paddle);
        }
    }

    collisionWithGround(canvas) {
        if (this.y + (this.dy * this.speed) > canvas.height - this.radius) {
            alert("GAME OVER");
            document.location.reload();
        }
    }

    calculateTraj(paddle)  {
        let distFromEdgeL = this.x - paddle.x;
        this.dx = (distFromEdgeL / (paddle.width / 2) - 1) * 2;
    }

    move(newX, newY) {

    }
}

export default Ball;