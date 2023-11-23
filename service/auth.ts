import { BASE_URL } from '@/constants/apis';
import { User } from '@/types/user';
import { fetchWithoutToken } from '@/utils/customFetch';

export async function signup({
  email,
  username,
  gender,
  year,
  month,
  day,
  password,
}: User): Promise<Response> {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      username,
      gender,
      year,
      month,
      day,
      password,
    }),
  });
  return response;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Response> {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const token = await response.text();

  if (response.ok) localStorage.setItem('TOKEN', token);

  return response;
}

export async function isEmailValid(email: string) {
  const response = await fetchWithoutToken(`/email/check?email=${email}`, {
    method: 'post',
  });
  if (response.ok) {
    return true;
  }
  return false;
}

export async function findPassword(email: string): Promise<Response> {
  const response = await fetchWithoutToken(`/password/send?email=${email}`, {
    method: 'post',
  });
  return response;
}
