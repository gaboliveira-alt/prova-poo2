import { User } from "./user";
import { UserContract } from "./utils";


class MessageHistory <T extends UserContract> {
    private arrayUsers: T[] = [];


    addUsers(user: T): void {
        this.arrayUsers.push(user);
    }


    registerMessage(): void {
        const logMessages: string[] = [];
        

        const message: UserContract = {
            sendMessage(): string {

            }
        }
    }


    searchMessage(): void {

    }
}