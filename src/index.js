import Ball from './modules/ball';
import Paddle from './modules/paddle';
import Brick from './modules/brick';
import * as level from './modules/levels';
import Game from './modules/game';

document.addEventListener('DOMContentLoaded', () => {

    let game = new Game();
    game.play();
});