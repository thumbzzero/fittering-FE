import { BASE_URL } from '@/constants/apis';

const accessToken =
  typeof window !== 'undefined' ? sessionStorage.getItem('TOKEN') : null;

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

  return response;
}
