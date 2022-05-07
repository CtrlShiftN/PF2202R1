class Rect {
    constructor(x, y, width, height, color = '#ffffff') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getColor() {
        return this.color;
    }

    draw(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;    // color of fill
        ctx.fillRect(this.x, this.y, this.width, this.height); // create rectangl
    }

    isCollisionRect(otherRect) {
        let distX = (this.x + this.width / 2) - (otherRect.getX() + otherRect.getWidth() / 2);
        if (distX < 0) {
            distX = -distX;
        }

        let distW = (this.width + otherRect.getWidth()) / 2;

        let distY = (this.y + this.height / 2) - (otherRect.getY() + otherRect.getHeight() / 2);
        distY = Math.abs(distY);

        let distH = (this.height + otherRect.getHeight()) / 2;

        return (distX <= distW && distY < distH);
    }
}