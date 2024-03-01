class Birdy {
    constructor() {

    }
    eat() {
        console.log("I can eat");
    }
    fly() {
        console.log("I can fly");
    }
}

class Ducky extends Birdy {}

class Ostrichy extends Birdy {
    fly(){
        console.log("Erreur: Les autruches ne peuvent pas voler");
    }
}

let Birdy1: Birdy = new Ducky();
Birdy1.eat(); // OK
Birdy1.fly(); // OK

let Birdy2: Birdy = new Ostrichy();
Birdy2.eat(); // OK
Birdy2.fly(); // Erreur: Les autruches ne peuvent pas voler

