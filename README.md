# Examples of SOLID Principles Implementation in typescript

This repository provides examples illustrating the implementation of each SOLID principle (Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle) in web development. Each example showcases the application of a specific principle before and after its implementation.

## Examples

For each SOLID principle, we provide before and after examples to demonstrate how adherence to these principles can lead to improved code quality, maintainability, and scalability.

### Single Responsibility Principle (SRP)

Each class or module should have only one reason to change, meaning it should have only one responsibility.

- **Before**: [Go to example](src\SRP_principle_not_respected.tsx)
- **After**: [Go to example](src\SRP_principle_respected.tsx)

The code demonstrates SRP by separating concerns related to users and email functionalities into distinct classes.

#### User Class:
- Defines a user entity with properties for name and email.
- Contains methods for saving a user and sending an email.
- Ensures that the `User` class has a single responsibility, managing user-related operations.

#### User2 Class:
- Similar to the `User` class but without the methods for saving a user and sending an email.
- Maintains a single responsibility of representing user data without additional functionalities.

#### UserRepository Class:
- Responsible for saving user data to a repository.
- Demonstrates SRP by handling user persistence without any email-related functionality.

#### EmailService Class:
- Handles the responsibility of sending emails.
- Separate from user-related concerns, adhering to SRP by focusing solely on email functionality.

By segregating functionalities into separate classes based on their responsibilities, the code follows the SRP, making it easier to maintain and extend.

### Open/Closed Principle (OCP)

Software entities should be open for extension but closed for modification, allowing for new functionality to be added without altering existing code.

- **Before**: [Go to example](src\OCP_Principle_not_respected.tsx)
- **After**: [Go to example](src\OCP_Principle_respected.tsx)

The code showcases the OCP by designing classes that are open for extension but closed for modification, allowing easy addition of new shapes without altering existing code.

#### Original Implementation:
- Defines classes for `Rectangle` and `Triangle`, each with a specific calculation method for its area.
- `AreaCalculator` class calculates the total area based on the provided shapes, but it requires modification whenever a new shape is introduced, violating the OCP.

#### Improved Implementation:
- Introduces the `Shape` interface representing a common behavior for all shapes - calculating area.
- Classes like `Rectangle2` and `Circle` implement the `Shape` interface, providing their specific area calculation methods.
- `AreaCalculator2` accepts an array of `Shape` instances, adhering to the OCP by being open to new shapes without needing modifications, thus promoting code extensibility.

By adopting the OCP, the codebase becomes more flexible, allowing for the addition of new shapes without the need for changes in existing classes, enhancing maintainability and scalability.

### Liskov Substitution Principle (LSP)

Subtypes should be substitutable for their base types without altering the correctness of the program, ensuring that derived classes can be used interchangeably with their base classes.

- **Before**: [Go to example](src\LIZCOV_principle_Not_Respected)
- **After**: [Go to example](src\LIZCOV_principle_respected)

The code demonstrates adherence to the Liskov Substitution Principle by ensuring that derived classes can be substituted for their base classes without affecting the program's correctness.

#### Example 1:
- Defines a base class `Bird` with methods `eat()` and `fly()`.
- Both `Duck` and `Ostrich` extend from `Bird`, inheriting its behavior.
- Instances of `Duck` and `Ostrich` can be treated as instances of `Bird`, showcasing LSP compliance.
- While both can eat, only ducks can fly, which results in a runtime error when trying to make an ostrich fly, highlighting a violation of the LSP.

#### Example 2:
- Introduces classes `Birds` and `FlyingBirds` representing different categories of birds.
- `Sparrow` and `Chicken` extend from `Birds`, with `Sparrow` being a flying bird.
- `Sparrow` can be substituted for its base class `FlyingBirds` without issues, ensuring LSP adherence.
- Similarly, `Chicken` can be treated as an instance of `Birds` without any problems.

By ensuring that subclasses can be used interchangeably with their base classes without altering the program's behavior, the code conforms to the Liskov Substitution Principle, promoting modularity and extensibility.

### Interface Segregation Principle (ISP)

Clients should not be forced to depend on interfaces they don't use. Instead of large interfaces, use smaller, more specific ones tailored to each client's needs.

- **Before**: [Go to example](src\ISP_principle_not_respected.tsx)
- **After**: [Go to example](src\ISP_Principle_respected.tsx)

The code exemplifies the Interface Segregation Principle by ensuring that clients are not forced to depend on interfaces they don't use, and by preferring smaller, more specific interfaces tailored to each client's needs.

#### Example 1:
- Defines an interface `WorkerAtFactory` with methods `work()` and `eat()`, representing workers at a factory.
- Classes like `FactoryWorker`, `Manager`, and `Robot` implement this interface, but the `Robot` class cannot correctly implement the `eat()` method, violating the ISP.

#### Example 2:
- Introduces smaller and more specific interfaces `WorkerAtFactories` and `Eater` to avoid unnecessary dependencies.
- Classes like `FactoryWorker2` and `Manager2` implement only the methods they need, adhering to the ISP.
- The `Robot2` class, which doesn't need to eat, doesn't implement the `Eater` interface, ensuring that it adheres to the ISP by not being forced to implement unnecessary methods.

By adhering to the ISP, the codebase becomes more modular and maintainable, as interfaces are tailored to specific client requirements, reducing unnecessary dependencies and ensuring cleaner code design.

### Dependency Inversion Principle (DIP)

High-level modules should not depend on low-level modules, but both should depend on abstractions. Abstractions should not depend on details; rather, details should depend on abstractions.

- **Before**: [Go to example](src\DIP_principle_not_respected)
- **After**: [Go to example](src\DIP_principle_respected)

The code showcases the Interface Segregation Principle by ensuring that clients are not forced to depend on interfaces they don't use, and by preferring smaller, more specific interfaces tailored to each client's needs.

#### Example 1:
- Defines classes `FrontEndDeveloper2` and `BackEndDeveloper2`, each with specific methods for writing code in JavaScript and C# respectively.
- `Project2` class depends directly on `FrontEndDeveloper2`, violating the ISP as it's tightly coupled to a specific implementation of a developer.

#### Example 2:
- Introduces a more modular approach with interfaces.
- Defines `Developer` interface with a single method `writeCode()`.
- Both `FrontEndDeveloper` and `BackEndDeveloper` implement the `Developer` interface, ensuring adherence to the ISP by providing a common interface for writing code.
- `Project` class now depends on the `Developer` interface rather than concrete implementations, promoting loose coupling and adhering to the ISP.

By adhering to the ISP, the code becomes more modular and maintainable, as interfaces are tailored to specific client requirements, reducing unnecessary dependencies and ensuring cleaner code design.

## Contributing

Contributions are welcome! If you have any suggestions, ideas, or want to report issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).