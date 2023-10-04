import { customFetch } from '@/utils/customFetch';

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
  const response = await customFetch('/users/mysize');
  if (!response.ok) {
    return {} as MySize;
  }
  return response.json();
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
