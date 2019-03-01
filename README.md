# Brick Destroyer

[Live](https://jlshaw117.github.io/Brick-Destroyer/)

![Brick Destroyer](assets/Screen_Shot.png)
## Overview

Brick Destroyer is a clone of the classic arcade game breakout. Players can control a paddle along the bottom of the screen with their mouse. They use the paddle to deflect the ball around a level to break bricks.

Every time the ball hits a brick the brick will come closer to being destroyed (it will take from 1 to 3 times to destroy a brick). Upon hitting the paddle the speed will increment slightly, increasing the difficulty the longer the level goes on. If the player misses the ball the number of lives will decrement by 1 and the ball will reset. If the player clears all bricks in the level they move on to the next level and the dificulty increases (increase starting ball speed).


## Code

* Calculates the trajectory of the ball after collision with paddle

```javascript
    // ball.js
     calculateTraj(paddle)  {
        let distFromEdgeL = this.x - paddle.x; // determines position from left edge
        //gives a number from -1 to 1 to determine what percent of the paddle that the
        //ball contacts and sets the x direction. 
        this.dx = (distFromEdgeL / (paddle.width / 2) - 1) * 2; 
    }
```

* Event listener to launch the ball

```javascript
    //game.js
    this.canvas.addEventListener('click', () => {
                //starts round if round has not started
                if (!this.roundStart) {
                    this.roundStart = true;
                    //sets direction of ball to go up
                    this.ball.dy = -1;
                }
            });
```

* Vanilla javascript
    * Used for gamelogic
* webpack
    * bundle files
* Canvas
    * Used for rendering and animation
