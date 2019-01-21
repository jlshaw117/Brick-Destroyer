
class PowerUp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 1;
        let powerUps = ['bigger', 'smaller', 'split', 'extra', 'blaster', 'catch'];
        let idx = Math.floor(Math.random() * 6);
        this.powerUp = 'blaster';
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

    checkForCollision(paddle, height) {
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
                default:
                    break;
            }
        } else if (top > height){
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