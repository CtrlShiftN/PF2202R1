class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }

    draw(elementID){
        let canvas = document.getElementById(elementID);
        // draw circle 
    }
}