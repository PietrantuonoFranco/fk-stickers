import Exception from "./Exception";

export default class InternalServerExcepcion extends Exception{
    constructor(detail: string, message: string = 'internal server error') {
        super(500, message, detail);
    }
}