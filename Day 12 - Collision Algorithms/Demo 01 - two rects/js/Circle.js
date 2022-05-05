class Circle {
    constructor(x, y, radius, color = '#ffffff') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getRadius() {
        return this.radius;
    }
    getColor() {
        return this.color;
    }

    draw(elementID) {
        var ctx = document.getElementById(elementID).getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    isCollisionCircle(otherCircle) {
        let distanceBtwTwoCircle = (this.x - otherCircle.getX()) * (this.x - otherCircle.getX()) + (this.y - otherCircle.getY()) * (this.y - otherCircle.getY());
        distanceBtwTwoCircle = Math.sqrt(distanceBtwTwoCircle);
        return distanceBtwTwoCircle <= (this.radius + otherCircle.getRadius());
    }

    isCollisionRect(rect) {
        let circleX = this.x, circleY = this.y; // toa do circle
        let rectTopLeftX = rect.getX(), rectTopLeftY = rect.getY(); // toa do diem tren cung ben trai cua Rectangle
        let rectBottomRightX = rect.getX() + rect.getWidth(), rectBottomRightY = rect.getY() + rect.getHeight(); // toa do diem duoi cung ben phai cua Rectangle

        if (circleX < rectTopLeftX) {
            circleX = rectTopLeftX;
        } else if (circleX > rectBottomRightX) {
            circleX = rectBottomRightX;
        }

        if (circleY < rectTopLeftY) {
            circleY = rectTopLeftY;
        } else if (circleY > rectBottomRightY) {
            circleY = rectBottomRightY;
        }

        let distanceX = this.x - circleX;
        let distanceY = this.y - circleY;
        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) <= this.radius;
    }
}