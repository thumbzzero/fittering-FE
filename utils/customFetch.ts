import { AUTH_URL, BASE_URL } from '@/constants/apis';

export async function customFetch(
  url: string,
  options?: RequestInit,
  isFileUpload?: boolean
): Promise<Response> {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('TOKEN') : null;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Authorization: `${accessToken}`,
  };

  const headers = isFileUpload
    ? { Authorization: `${accessToken}`, ...options?.headers }
    : { ...defaultHeaders, ...options?.headers };
  const mergedURL = AUTH_URL + url;
  const mergedOptions = { ...options, headers };

  const response = await fetch(mergedURL, mergedOptions);

  if (response.status === 401) {
    if (localStorage.getItem('TOKEN')) {
      window.alert('다시 로그인해 주세요.');
      localStorage.removeItem('TOKEN');
    }
    window.location.replace('/login');
  }

  return response;
}

export async function serverFetch(
  url: string,
  options?: RequestInit
): Promise<Response> {
  const headers = { 'Content-Type': 'application/json', ...options?.headers };
  const mergedURL = BASE_URL + url;
  const mergedOptions = { ...options, headers };

  const response = await fetch(mergedURL, mergedOptions);

  return response;
}
