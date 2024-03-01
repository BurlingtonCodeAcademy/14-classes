class Pizza {
    constructor(diameter, type) {
        if (diameter < 10 || diameter > 20) {
            throw new Error("Diameter should be between 10 and 20 inches!");
        }

        this.diameter = diameter;

        if (type.toLowerCase() === "pineapple") {
            throw new Error("Pineapple is not supported!");
        }

        this.type = type;
    }

    bake() {
        console.log("Baking pizza... it should be ready in 5 minutes!");
    }
}

// create a pizza
let myPepperoniPizza = new Pizza(16, "pepperoni");
// let mySmallPineapplePizza = new Pizza(10, "pineapple");
let myMediumSupremePizza = new Pizza(14, "supreme");

// console.log("First example", myPepperoniPizza);
// // console.log("Second example", mySmallPineapplePizza);
// console.log("Third example", myMediumSupremePizza);

// myPepperoniPizza.diameter = 18;
// myPepperoniPizza.type = "pepperoni with extra cheese";

// console.log("Second example", myPepperoniPizza);

// myPepperoniPizza.bake();

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // calculate the area of a circle
    area() {
        return Math.PI * this.radius * this.radius;
    }

    // calculate the circumference of a circle
    circumference() {
        return 2 * Math.PI * this.radius;
    }

    static fromDiameter(diameter) {
        return new Circle(diameter / 2);
    }
}

// let myCircle = new Circle(35);

// console.log(myCircle);
// console.log(myCircle.area());
// console.log(myCircle.circumference());

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2);
}

let anotherCircle = circleFromDiameter(100);
console.log(anotherCircle);



let c = Circle.fromDiameter(2)
console.log(c);