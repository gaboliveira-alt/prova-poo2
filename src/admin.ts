import { User } from "./user";

export class Admin extends User {
    constructor(name: string, email: string) {
        super(name, email);
    }


    message(): string {
        return 'Admin enviou uma mensagem';
    }
}