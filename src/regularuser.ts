import { User } from "./user"

export class RegularUser extends User {
    constructor(name: string, email: string) {
        super(name, email)
    }


    message(): string {
        return 'Usuario enviou uma mensagem'
    }
}