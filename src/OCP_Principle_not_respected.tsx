class Rectangle {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

class triangle
{
    constructor(public base: number, public height: number) {}

    area(): number {
        return 0.5 * this.base * this.height;
    }
}

class AreaCalculator {
    constructor(public shapes: any[]) {}

    totalArea(): number {
        let total = 0;
        for (let shape of this.shapes) {
            if (shape instanceof Rectangle) {
                total += shape.area();
            }
            if (shape instanceof triangle) {
                total += shape.area();
            }
        }
        return total;
    }
}