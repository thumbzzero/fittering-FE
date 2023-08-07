import { BASE_URL } from '@/constants/apis';

type User = {
  username: string;
  password: string;
  email: string;
  gender: string;
  year: number;
  month: number;
  day: number;
};

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

  sessionStorage.setItem('TOKEN', await response.text());

  return response;
}
