export abstract class User {
    constructor(public readonly name: string, protected readonly email: string) {
        this.name = name
        this.email = email
    }


    abstract message(): string
}