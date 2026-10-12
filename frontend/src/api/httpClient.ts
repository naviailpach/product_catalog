const BASE_URL = "http://localhost:3000/api";

const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const get = async <T>(url: string): Promise<T> => {
    const [response] = await Promise.all([
        fetch(`${BASE_URL}${url}`),
        delay(500),
    ]);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<T>;
};
