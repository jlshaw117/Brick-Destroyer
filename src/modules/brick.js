
class Brick {

    constructor(x,y, value) {
        this.x = x;
        this.y = y;
        this.edge = 35;
        this.value = value;
    }

    draw(screen) {

        const COLORS = {
            1: {x: 0, y: 120},
            2: { x: 360, y: 80},
            3: {x: 320, y: 80}
        };

        screen.beginPath();
        // screen.lineWidth = 1;
        // screen.fillStyle = COLORS[this.value];
        // screen.rect(this.x,this.y,this.edge,this.edge);
        // screen.stroke();
        // screen.fill();
        // screen.closePath();

        const img = document.getElementById('sprites');
        screen.drawImage(img, COLORS[this.value].x, COLORS[this.value].y, 30, 30, this.x, this.y, this.edge, this.edge);
        

    }
}

export default Brick;