import Exception from "./Exception";

export default class ForbiddenException extends Exception {
    constructor(message: string, detail: string) {
        super(403, message, detail);
    }
}