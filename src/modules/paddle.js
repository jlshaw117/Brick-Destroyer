

class Paddle {

    constructor(canvas, height, width) {
        this.height = 15;
        this.width = 75;
        this.x = canvas.width / 2 - (this.width / 2);
        this.y = canvas.height - 30 - 10;
        this.idx = 1;
        this.coords = {
            1: { x: 0, y: 0 },
            2: { x: 0, y: 30 },
            3: { x: 0, y: 60 },
            4: { x: 0, y: 90 }
        };
    }

    draw(screen) {
        // screen.fillRect(this.x, this.y, this.width, this.height);
        if (this.idx < 4) {
            this.idx += 0.2;
        } else {
            this.idx = 1;
        }
        const img = document.getElementById('paddle-sprites');
        screen.drawImage(img, this.coords[Math.floor(this.idx)].x, this.coords[Math.floor(this.idx)].y, 75, 30, this.x, this.y - 15, this.width, this.height + 15);
        screen.drawImage(img, 0, this.coords[Math.floor(this.idx)], 75, 30, this.x, this.y, this.width, this.height);
    }
}

export default Paddle;