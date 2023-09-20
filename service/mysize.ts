import { customFetch } from '@/utils/customFetch';
import { readFile } from 'fs/promises';
import path from 'path';

export type MySize = {
  height: number | null;
  weight: number | null;
  arm: number | null;
  leg: number | null;
  shoulder: number | null;
  waist: number | null;
  chest: number | null;
  thigh: number | null;
  hip: number | null;
};

export async function getMySize(): Promise<MySize> {
  // 더미 데이터 읽어옴
  const filePath = path.join(process.cwd(), 'data', 'mysize.json');
  return readFile(filePath, 'utf-8').then<MySize>(JSON.parse);
}

export async function getSilhouetteImage(
  type: 'FRONT' | 'SIDE',
  formData: FormData
): Promise<string | null> {
  const response = await customFetch(
    `/users/mysize/silhouette?type=${type}`,
    {
      method: 'POST',
      body: formData,
    },
    true
  );
  if (!response.ok) {
    return null;
  }
  const data: { url: string } = await response.json();
  return data.url;
}
