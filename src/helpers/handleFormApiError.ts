import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import toast from 'react-hot-toast';
import type {
    ValidationErrorResponse,
    MessageErrorResponse,
} from '@/types/error';

export function isFetchErrorWithData(
    error: FetchBaseQueryError,
): error is FetchBaseQueryError & { data: unknown } {
    return typeof error.status === 'number' && 'data' in error;
}

export function isValidationError(
    data: unknown,
): data is ValidationErrorResponse {
    return typeof data === 'object' && data !== null && 'errors' in data;
}

export function isMessageError(data: unknown): data is MessageErrorResponse {
    return typeof data === 'object' && data !== null && 'message' in data;
}

interface HandleFormApiErrorParams<TForm extends FieldValues> {
    error: unknown;
    setError: UseFormSetError<TForm>;
    fallbackMessage?: string;
}

export function handleFormApiError<TForm extends FieldValues>({
    error,
    setError,
    fallbackMessage = 'Something went wrong. Please try again.',
}: HandleFormApiErrorParams<TForm>): void {
    if (!error || typeof error !== 'object') {
        toast.error(fallbackMessage);
        return;
    }

    const apiError = error as FetchBaseQueryError;

    if (!isFetchErrorWithData(apiError)) {
        toast.error('Network error. Please check your connection.');
        return;
    }

    const { status, data } = apiError;

    // 400 — validation errors
    if (status === 400 && isValidationError(data)) {
        Object.entries(data.errors).forEach(([field, messages]) => {
            setError(field as Path<TForm>, {
                type: 'server',
                message: messages[0],
            });
        });
        return;
    }

    // 401 / 403 — auth / permission errors
    if ((status === 401 || status === 403) && isMessageError(data)) {
        setError('root', {
            type: 'server',
            message: data.message,
        });
        return;
    }

    // Generic server message
    if (isMessageError(data)) {
        toast.error(data.message);
        return;
    }

    toast.error(fallbackMessage);
}
