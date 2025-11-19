import Exception from "./Exception";

export default class BadRequestException extends Exception{
    constructor(detail: string, message: string = 'bad request') {
        super(400, message, detail);
    }
}