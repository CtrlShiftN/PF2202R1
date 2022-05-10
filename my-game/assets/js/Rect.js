class Rect {
    constructor(x, y, width, height, color = '#ffffff', speed = 20) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.speed = speed;
    }
    getX() { return this.x }
    getY() { return this.y }
    getWidth() { return this.width }
    getHeight() { return this.height }
    getColor() { return this.color }
    getSpeed() { return this.speed }
    isMovingToLeft() { return this.isMovingLeft }
    isMovingToRight() { return this.isMovingRight }
    moveLeft() { this.isMovingLeft = true }
    moveRight() { this.isMovingRight = true }
    stop() {
        this.isMovingLeft = false;
        this.isMovingRight = false;
    }
    toLeft(){ 
        this.x -= this.speed;
    }
    toRight(){ 
        this.x += this.speed;
    }

}