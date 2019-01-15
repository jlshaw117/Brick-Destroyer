
class Brick {

    constructor(x,y, value) {
        this.x = x;
        this.y = y;
        this.edge = 35;
        this.value = value;
    }

    draw(screen) {

        const POSITIONS = {
            0: {x: 0, y: 120},
            1: {x: 0, y: 120},
            2: { x: 360, y: 80},
            3: {x: 320, y: 80}
        };

        screen.beginPath();

        const img = document.getElementById('sprites');
        screen.drawImage(img, POSITIONS[this.value].x, POSITIONS[this.value].y, 30, 30, this.x, this.y, this.edge, this.edge);
        

    }
}

export default Brick;