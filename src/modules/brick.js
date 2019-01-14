
class Brick {

    constructor(x,y, value) {
        this.x = x;
        this.y = y;
        this.edge = 35;
        this.value = value;
    }

    draw(screen) {

        const COLORS = {
            1: 'red',
            2: 'blue',
            3: 'green'
        };

        screen.beginPath();
        // screen.lineWidth = 1;
        screen.fillStyle = COLORS[this.value];
        screen.rect(this.x,this.y,this.edge,this.edge);
        screen.stroke();
        screen.fill();
        screen.closePath();
    }
}

export default Brick;