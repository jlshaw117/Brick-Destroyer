

class Paddle {

    constructor(canvas, height, width) {
        this.blasterId = null;
        this.height = 15;
        this.width = 75;
        this.x = canvas.width / 2 - (this.width / 2);
        this.y = canvas.height - 30 - 10;
        this.idx = 1;
        this.blaster = false;
        this.catch = true;
        this.blasterWithCatchCoords = {
            1: { x: 0, y: 0 },
            2: { x: 0, y: 30 },
            3: { x: 0, y: 60 },
            4: { x: 0, y: 90 }
        };
        this.blasterCoords = {
            1: { x: 75, y: 0 },
            2: { x: 75, y: 30 },
            3: { x: 75, y: 60 },
            4: { x: 75, y: 90 }
        }
        this.catchCoords = {
            1: { x: 150, y: 0 },
            2: { x: 150, y: 26 },
            3: { x: 150, y: 52 },
            4: { x: 150, y: 78 }
        };
        this.plainCoords = {
            1: { x: 225, y: 0 },
            2: { x: 225, y: 15 },
            3: { x: 225, y: 30 },
            4: { x: 225, y: 45 }
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
        if (this.catch && this.blaster) {
            screen.drawImage(img, this.blasterWithCatchCoords[Math.floor(this.idx)].x, this.blasterWithCatchCoords[Math.floor(this.idx)].y, 75, 26, this.x, this.y - 15, this.width, this.height + 15);
        } else if (this.blaster) {
            screen.drawImage(img, this.blasterCoords[Math.floor(this.idx)].x, this.blasterCoords[Math.floor(this.idx)].y, 75, 26, this.x, this.y - 15, this.width, this.height + 15);
        } else if (this.catch) {
            screen.drawImage(img, this.catchCoords[Math.floor(this.idx)].x, this.catchCoords[Math.floor(this.idx)].y, 75, 26, this.x, this.y - 11, this.width, this.height + 11);
        } else {
            screen.drawImage(img, this.plainCoords[Math.floor(this.idx)].x, this.plainCoords[Math.floor(this.idx)].y, 75, 15, this.x, this.y, this.width, this.height);
        }

        // screen.drawImage(img, 0, this.coords[Math.floor(this.idx)], 75, 30, this.x, this.y, this.width, this.height);
    }
}

export default Paddle;