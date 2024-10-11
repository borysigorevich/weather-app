'use client';
import { ExpectedError } from '../ExpectedError/ExpectedError';
import { PropsWithChildren } from 'react';

type ErrorHandlerProps = {
    error?: string;
};

export const ExpectedErrorsHandler = ({
    error,
    children,
}: PropsWithChildren<ErrorHandlerProps>) => {
    if (error) {
        throw new ExpectedError(error, true);
    }

    return children;
};
