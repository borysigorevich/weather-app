export class ExpectedError extends Error {
    showFallback: boolean;

    constructor(message: string, showFallback = false) {
        super(message);
        this.name = 'ExpectedError';
        this.showFallback = showFallback;
    }
}
