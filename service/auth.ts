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
