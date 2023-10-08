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

export type smartAnalysisRequestBody = {
  front: string;
  side: string;
  height: number;
  weight: number;
  sex: string;
};

export async function getMySize(): Promise<MySize> {
  const response = await customFetch('/users/mysize');
  if (!response.ok) {
    return {} as MySize;
  }
  return response.json();
}

export async function editMySize(mySize: MySize) {
  const response = await customFetch('/users/mysize', {
    method: 'POST',
    body: JSON.stringify(mySize),
  });
  return response;
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

export async function smartAnalysis(body: smartAnalysisRequestBody) {
  const response = await customFetch('/users/recommendation/measurement', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return response;
}
