class Project {
    constructor(private developer: Developer) {}

    implement() {
        this.developer.writeCode();
    }
}