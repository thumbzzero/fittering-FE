import { BASE_URL } from '@/constants/apis';
import { login } from '@/service/auth';

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
  const mergedURL = BASE_URL + url;
  const mergedOptions = { ...options, headers };

  const response = await fetch(mergedURL, mergedOptions);

  if (response.status === 401) {
    localStorage.removeItem('TOKEN');
    window.location.replace('/login');
  }

  return response;
}
