

class Paddle {

    constructor(canvas, height, width) {
        this.height = height;   
        this.width = width;
        this.x = canvas.width / 2 - (width / 2);
        this.y = canvas.height - height - 10;
    }
}

export { Paddle };