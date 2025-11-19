import Exception from "./Exception";

export default class BadRequestException extends Exception{
    constructor(message: string, detail: string) {
        super(400, message, detail);
    }
}