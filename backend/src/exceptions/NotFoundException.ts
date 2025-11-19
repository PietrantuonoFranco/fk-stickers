import Exception from "./Exception";

export default class NotFoundException extends Exception{
    constructor(detail: string, message: string = 'resource not found') {
        super(404, message, detail);
    }
}