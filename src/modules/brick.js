
class Brick {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.edge = 20;
    }

    draw(screen, color) {
        screen.lineWidth = 3;
        screen.fillStyle = color;
        screen.rect(this.x,this.y,this.edge,this.edge);
        screen.stroke();
        screen.fill();
    }
}

export default Brick;