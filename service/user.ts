import { MyPage } from '@/types/user';
import { customFetch } from '@/utils/customFetch';

export async function getMyPage(): Promise<MyPage> {
  const response = await customFetch('/users/mypage');
  if (!response.ok) {
    return {} as MyPage;
  }
  return response.json();
}

export async function editPassword(password: string, newPassword: string) {
  const response = await customFetch(
    `/users/password/check/${password}/${newPassword}`,
    {
      method: 'POST',
    }
  );
  return response;
}

export async function deleteUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Response> {
  const response = await customFetch('/users', {
    method: 'DELETE',
    body: JSON.stringify({ email, password }),
  });
  return response;
}
