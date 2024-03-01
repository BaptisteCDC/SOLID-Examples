interface WorkerAtFactory {
    work(): void;
    eat(): void;
}

class FactoryWorker implements WorkerAtFactory {
    work() {
        // ...
    }

    eat() {
        // ...
    }
}

class Manager implements WorkerAtFactory {
    work() {
        // ...
    }

    eat() {
        // ...
    }
}

class Robot implements WorkerAtFactory {
    work() {
        // ...
    }

    eat() {
        // Erreur: Les robots ne mangent pas
    }
}