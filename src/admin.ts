import { User } from "./user";

export class Admin extends User {
    
    private static email: string = 'admin4567@hotmail.com';


    constructor(name: string) {
        super(name, Admin.email);
    }


    sendMessage(to: string, message: string): string {
        return `Administrador - ${this.name} tem uma mensagem para ${to}: ` + `${message}`
    }


    message(): string {
        return 'Lorde Vader requer sua presença, Comandante.'
    }
}