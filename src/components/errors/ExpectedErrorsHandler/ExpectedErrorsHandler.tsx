'use client';
import { ExpectedError } from '../ExpectedError/ExpectedError';
import { PropsWithChildren } from 'react';

type ErrorHandlerProps = {
	error?: string;
};

export const ExpectedErrorsHandler = ({
	error,
}: PropsWithChildren<ErrorHandlerProps>) => {
	if (!error) return null;

	throw new ExpectedError(error, true);
};
