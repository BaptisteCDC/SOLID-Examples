interface WorkerAtFactories {
    work(): void;
}

interface Eater {
    eat(): void;    
}

interface workandeat extends WorkerAtFactories, Eater
{
    work(): void;
    eat(): void;

}

class FactoryWorker2 implements workandeat {
    work() {
        // ...
    }

    eat() {
        // ...
    }
}

class Manager2 implements WorkerAtFactories, Eater {
    work() {
        // ...
    }

    eat() {
        // ...
    }
}

class Robot2 implements WorkerAtFactories {
    work() {
        // ...
    }
}

// je ne fais pas d'interface trop generaliste et si je respecte une interface j'implémente toutes ses méthodes