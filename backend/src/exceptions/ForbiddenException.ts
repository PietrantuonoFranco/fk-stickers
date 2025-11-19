import Exception from "./Exception";

export default class ForbiddenException extends Exception {
    constructor(detail: string, message: string = 'forbidden access') {
        super(403, message, detail);
    }
}