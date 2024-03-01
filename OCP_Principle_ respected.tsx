interface Shape {
    area(): number;
    
}

class Rectangle2 implements Shape {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(public radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class AreaCalculator2 {
    constructor(public shapes: Shape[]) {}

    totalArea(): number {
        let total = 0;
        for (let shape of this.shapes) {
            total += shape.area();
        }
        return total;
    }
}