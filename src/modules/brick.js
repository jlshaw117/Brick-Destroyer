
class Brick {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.edge = 19;
    }

    draw(screen, color) {
        screen.lineWidth = 1;
        screen.fillStyle = color;
        screen.rect(this.x,this.y,this.edge,this.edge);
        screen.stroke();
        screen.fill();
    }
}

export default Brick;