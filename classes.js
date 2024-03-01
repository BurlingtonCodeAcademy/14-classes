class Pizza {
    constructor(diameter, type) {
        this.diameter = diameter;
        this.type = type;
    }

    bake() {
        console.log("Baking pizza... it should be ready in 5 minutes!");
    }
}

// create a pizza
let myPepperoniPizza = new Pizza(16, "pepperoni");
let mySupremePizza = new Pizza(18, "supreme");

console.log("First example", myPepperoniPizza, mySupremePizza);

myPepperoniPizza.diameter = 18;
myPepperoniPizza.type = "pepperoni with extra cheese";

console.log("Second example", myPepperoniPizza);

myPepperoniPizza.bake();
