import { User } from "./user";

export class RegularUser extends User {
    
    private static email: string = 'user3456@hotmail.com'


    constructor(name: string) {
        super(name, RegularUser.email)
    }


    sendMessage(to: string, message: string): string {
        return `Usuario - ${this.name} tem uma mensagem para ${to}: ` + `${message}`
    }


    message(): string {
        return 'Luke Skywalker está aqui! Droga, avisem ao Lorde Vader ou ao Imperador!'
    }
}