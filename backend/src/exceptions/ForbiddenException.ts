import Exception from "./Exception";

export default class ForbiddenException extends Exception {
    constructor(message: string = 'Forbidden access', detail: string) {
        super(403, message, detail);
    }
}