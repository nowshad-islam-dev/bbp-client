export interface ValidationErrorResponse {
    status: 'fail';
    errors: Record<string, string[]>;
}

export interface MessageErrorResponse {
    status: 'fail';
    message: string;
}
