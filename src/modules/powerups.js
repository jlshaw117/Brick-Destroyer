import Ball from "./ball";

class PowerUp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 1;
        let powerUps = ['bigger', 'smaller', 'split', 'extra', 'blaster'];
        let idx = Math.floor(Math.random() * powerUps.length);
        this.powerUp = powerUps[idx];
        this.height = 31;
        this.width = 33;
        this.coords = {
            'bigger': {x: 0, y: 0},
            'smaller': {x: 33, y: 0},
            'split': {x: 66, y: 0},
            'extra': {x: 33, y: 31},
            'blaster': {x: 0, y: 124},
            'catch': {x: 0, y: 155},
        };
    }

    checkForCollision(paddle, game) {
        let pLeft = paddle.x;
        let pRight = paddle.x + paddle.width;
        let pTop = paddle.y;
        let pBottom = paddle.y + paddle.height;
        let left = this.x;
        let right = this.x + this.width;
        let top = this.y;
        let bottom = this.y + this.height;
        if (right >= pLeft && left <= pRight && bottom >= pTop && top <= pBottom) {
            switch (this.powerUp) {
                case 'blaster':
                    paddle.blaster = true;
                    if (paddle.blasterId) {
                        window.clearTimeout(paddle.blasterId);
                    }
                    paddle.blasterId = setTimeout(() => {
                        paddle.blaster = false;
                        paddle.blasterId = null;
                    }, 10000);
                    return true;
                case 'catch':
                    paddle.catch = true;
                    return true;
                case 'extra':
                    game.lives += 1;
                    return true;
                case 'bigger':
                    if (paddle.width < 400) paddle.width += 50;
                    return true;
                case 'smaller':
                    if (paddle.width > 50) paddle.width -= 50;
                    return true;
                case 'split':
                    let new_balls = [];
                    game.balls.forEach(ball => {
                        let new_ball = new Ball(game, ball.radius, ball.x, ball.y);
                        new_ball.dx = -ball.dx;
                        new_ball.dy = ball.dy;
                        new_balls.push(new_ball);
                    });
                    game.balls = game.balls.concat(new_balls);
                return true;
                default:
                    break;
            }
        } else if (top > game.canvas.height){
            return true;
        } else {
            return false;
        }
    }

    draw(screen) {

        let img = document.getElementById('powerups');
        screen.drawImage(img, this.coords[this.powerUp].x, this.coords[this.powerUp].y, this.width, this.height, this.x, this.y, this.width, this.height);
    } 
}

export default PowerUp;