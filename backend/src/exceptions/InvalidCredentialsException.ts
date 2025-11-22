import Exception from "./Exception";

export default class InvalidCredentialsException extends Exception{
    constructor(message: string = "Unauthorized", detail: string) {
        super(401, message, detail);
    }
}