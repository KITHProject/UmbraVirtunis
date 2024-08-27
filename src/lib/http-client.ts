export const httpClient = {
  baseURL: process.env.NEXT_API_URL as string,

  get: async <T>(url: string, params?: Record<string, string | number>) => {
    const queryString = params
      ? `?${new URLSearchParams(params as Record<string, string>)}`
      : '';
    return sendRequest<T>(`${url}${queryString}`, 'GET');
  },

  post: async <T>(url: string, data: unknown) => {
    return sendRequest<T>(url, 'POST', data);
  },

  patch: async <T>(url: string, data: unknown) => {
    return sendRequest<T>(url, 'PATCH', data);
  },

  put: async <T>(url: string, data: unknown) => {
    return sendRequest<T>(url, 'PUT', data);
  },

  delete: async <T>(url: string) => {
    return sendRequest<T>(url, 'DELETE');
  },
};

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};

async function sendRequest<T>(
  url: string,
  method: string,
  data?: unknown
): Promise<T> {
  const response = await fetch(`${httpClient.baseURL}${url}`, {
    method,
    headers: {
      ...headers,
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return (await response.json()) as Promise<T>;
}
