export type ApiFetchOptions = RequestInit & {
    searchParams?: Record<string, string | undefined>;
    baseUrl?: string;
};

export type ApiFetchResponse<T> =
    | { data: T; error?: undefined }
    | { data?: undefined; error: string };

export type ApiFetchFn<Options extends ApiFetchOptions = ApiFetchOptions> = <T>(
    input: RequestInfo | URL,
    options?: Options | undefined,
) => Promise<ApiFetchResponse<T>>;

export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

export const apiFetch: ApiFetchFn = async (input, options?) => {
    const baseUrl = options?.baseUrl || API_BASE_URL
    const url = new URL(`${baseUrl}${input}`);

    if (options?.searchParams) {
        Object.entries(options.searchParams).forEach(([key, value]) => {
            value && url.searchParams.append(key, value);
        });
    }

    try {
        console.log({ url });
        const response = await fetch(url.toString(), options);
        const data = await response.json();

        if (!response.ok && (data?.message || data?.error)) {
            console.error(
                `Fetch failed with status ${response.status} (${response.statusText})`,
                'URL:',
                url.toString(),
                'Response:',
                data,
            );
            return {
                error:
                    data.error.message ||
                    data.error.error ||
                    `Error: ${response.status} ${response.statusText}`,
            };
        }

        return { data };
    } catch (error) {
        console.error('Error during fetch:', error, 'for URL:', url.toString());
        throw new Error(
            error instanceof Error
                ? error.message
                : 'An unknown error occurred',
        );
    }
};
