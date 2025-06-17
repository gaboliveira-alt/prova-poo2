import { UserContract } from "./utils";
import { Admin } from "./admin";
import { RegularUser } from "./regularuser";
import { User } from "./user";

class MessageHistory <T extends UserContract> {
    constructor(protected userArrays: T[], protected user: T) {
        this.userArrays = [],
        this.user = user

    }


    addUsers(): void {
        this.userArrays.push(this.user)
    }


    registerMessage(userToSend: Admin, userToReceived: RegularUser): void {
        
        const message: UserContract = {
            sendMessage(to, message) {
                to = userToReceived.name
                message = userToSend.message()

                return `${to} você recebeu uma mensagem:\n${message}`
            },
        }

        const logMessages: UserContract[] = []
        logMessages.push(message) 
    }


    searchMessage(): void {

    }
}