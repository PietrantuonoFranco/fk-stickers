export default class Exception extends Error {
    status: string;
    statusCode: number;
    details: string;
    timestamp: string;

    constructor(statusCode: number, message: string, details?: string) {
        super(message);
        this.name = 'Exception';
        this.status = 'Error';
        this.statusCode = statusCode;
        this.details = details ?? 'No details provided';
        this.timestamp = new Date().toISOString();

        Object.setPrototypeOf(this, Exception.prototype);
    }
}