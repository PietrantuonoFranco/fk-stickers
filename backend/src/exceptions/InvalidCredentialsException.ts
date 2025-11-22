import Exception from "./Exception";

export default class InvalidCredentialsException extends Exception{
    constructor(detail: string, message: string = "Unauthorized") {
        super(401, message, detail);
    }
}