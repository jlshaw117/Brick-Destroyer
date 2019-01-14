import Paddle from "./paddle";
import Ball from "./ball";
import levels from './levels';
import Brick from "./brick";

class Game {

    constructor(lives = 3) {
        this.lives = lives;
        this.roundStart = false;
        this.canvas = document.getElementById('screen');
        this.secreen = this.canvas.getContext('2d');
        this.paddle = new Paddle(this.canvas, 10, 100);
        this.ball = new Ball(8, this.canvas.width / 2, paddle.y - 8);
        this.bricks = [];
        this.level = 1;
        this.levels = levels;
        this.currentLevel = this.levels[(this.level - 1) % this.levels.length];
    }

    buildLevel() {
        for (let y = 0; y < this.currentLevel.length; y++) {
            for (let x = 0; x < this.currentLevel[0].length; x++) {
                let brick = new Brick(x * 40, y * 40, this.currentLevel[y][x]);
                this.bricks.push(brick);
            }
            
        }
    }

    play() {
        this.buildLevel();

        this.canvas.addEventListener('click', () => {
            if (!this.roundStart) {
                this.roundStart = true;
                this.ball.dy =-1;
            }
        });
    }
}