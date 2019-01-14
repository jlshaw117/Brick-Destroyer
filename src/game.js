class Game {

    constructor(screen, lives = 3) {
        this.lives = lives;
        this.screen = screen;
        this.ctx = screen.getContext('2d');
    }
}