class User2 {
    Name: string;
    Email: string;
    constructor(public name: string, public email: string) {
        this.Name = name;
        this.Email = email;
    }
}

class UserRepository{
    saveUser(user: User2) {
        // code to save user
    }
}

class EmailService {
    sendEmail(user: User2) {
        // code to send email
    }
}