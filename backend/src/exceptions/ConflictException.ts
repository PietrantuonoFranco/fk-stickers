import Exception from './Exception';

export default class ConflictException extends Exception {
    constructor(detail: string, message: string = 'resource already taken') {
        super(409, message, detail);
    }
}   