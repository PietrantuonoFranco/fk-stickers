import Exception from "./Exception";

export default class InternalServerExcepcion extends Exception{
    constructor(message: string = 'internal server error', detail: string) {
        super(500, message, detail);
    }
}