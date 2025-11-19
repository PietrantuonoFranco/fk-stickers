import Exception from "./Exception";

export default class NotFoundException extends Exception{
    constructor(message: string = 'resource not found', detail: string) {
        super(404, message, detail);
    }
}