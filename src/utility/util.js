
export const collisionWithWall = (ball, canvas) => {

    return (ball.x + (ball.dx * ball.speed) > canvas.width - ball.radius || ball.x + (ball.dx * ball.speed) < ball.radius) ? true : false;
    
};

export const collisionWithTop = (ball) => {

    return (ball.y + (ball.dy * ball.speed) < ball.radius) ? true : false;
};