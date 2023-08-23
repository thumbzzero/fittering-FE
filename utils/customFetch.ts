import { AUTH_URL } from '@/constants/apis';

const accessToken =
  typeof window !== 'undefined' ? localStorage.getItem('TOKEN') : null;

const defaultHeaders = {
  'Content-Type': 'application/json',
  Authorization: `${accessToken}`,
};

export async function customFetch(
  url: string,
  options?: RequestInit
): Promise<Response> {
  const headers = { ...defaultHeaders, ...options?.headers };
  const mergedURL = AUTH_URL + url;
  const mergedOptions = { ...options, headers };

  const response = await fetch(mergedURL, mergedOptions);

  if (response.status === 401) {
    localStorage.removeItem('TOKEN');
    window.location.replace('/login');
  }

  return response;
}
