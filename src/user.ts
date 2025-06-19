import { UserContract } from "./utils";

export abstract class User implements UserContract {
    public readonly name: string;
    protected email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }


    public isTheSame(otherUser: User): boolean {
        return this.name == otherUser.name
    }

    
    abstract sendMessage(to: string, message: string): string;

    abstract message(): string;
}