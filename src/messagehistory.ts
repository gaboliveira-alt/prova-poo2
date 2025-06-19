import { User } from "./user";
import { UserContract } from "./utils";

export class MessageHistory<T extends UserContract> {
    
    private logMessages: Array<string> = [];
    private arrayUsers: Array<T> = [];


    addUsers(user: T): void {
        if (this.arrayUsers.length >= 4) throw new Error('O limite de 4 usuarios foi atingido!')
        if (this.arrayUsers.includes(user)) throw new Error('Este Usuario já foi adicionado')
        if (this.arrayUsers.some(u => (u as unknown as User).isTheSame(user as unknown as User)))
        this.arrayUsers.push(user);
    }


    registerMessages(user: T, to: string, message: string): void {
        const userSendMessage = user.sendMessage(to, message);
        this.logMessages.push(userSendMessage);
    }


    searchMessages(): void {
        if (this.logMessages.length === 0) throw new Error('Não há mensagens no Registro para buscar!');
        console.log('Historico de Mensagens');
        console.log('\n');

        for (const message of this.logMessages) {
            console.log(message);
        }
    }


    searchSender(senderName: string): void {
        const filteredNamesUsers = this.logMessages.filter(user => user.includes(senderName));
        console.log('Mensangens enviadas desse Remetente:');
        for (const message of filteredNamesUsers) {
            console.log(message);
        }
    }
}