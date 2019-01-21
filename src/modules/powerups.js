
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

    draw(screen) {

        let img = document.getElementById('powerups');
        screen.drawImage(img, this.coords[this.powerUp].x, this.coords[this.powerUp].y, this.width, this.height, this.x, this.y, this.width, this.height);
    } 
}

export default PowerUp;