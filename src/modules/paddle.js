

class Paddle {

    constructor(canvas, height, width) {
        this.height = 30;   
        this.width = width;
        this.x = canvas.width / 2 - (width / 2);
        this.y = canvas.height - 30 - 10;
    }

    draw(screen) {
        // screen.fillRect(this.x, this.y, this.width, this.height);

        const img = document.getElementById('sprites');
        screen.drawImage(img, 0, 200, 100, 30, this.x, this.y, this.width, this.height);
    }
}

export default Paddle;