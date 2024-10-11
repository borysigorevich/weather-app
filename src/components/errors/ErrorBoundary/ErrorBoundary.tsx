'use client';
import { ExpectedError } from '../ExpectedError/ExpectedError';
import React, { Suspense } from 'react';
import { toast } from 'sonner';

interface ErrorBoundaryProps {
    fallback: React.ReactNode;
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    isExpectedError?: boolean;
    showFallback?: boolean;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(
        error: Error & { digest?: string;  },
    ): ErrorBoundaryState {
        const isExpectedError = error instanceof ExpectedError;

        return { hasError: true, isExpectedError };
    }

    componentDidCatch(error: Error) {
        if (this.state.isExpectedError) {
            toast.error(error.message, {
                duration: Infinity,
            });
        } else {
            toast.error(
                'An unexpected error occurred. Please try again later.',
                {
                    duration: Infinity,
                },
            );
        }
    }

    render() {
        const { fallback, children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return fallback;
        }

        return <Suspense fallback={fallback}>{children}</Suspense>;
    }
}
