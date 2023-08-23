import { customFetch } from '@/utils/customFetch';

export type MallPreview = {
  id: number;
  name: string;
  image: string;
};

export type Mall = {
  id: number;
  name: string;
  url: string;
  description: string;
  image: string;
  view: number;
};

export async function getRankedMallPreview(): Promise<MallPreview[]> {
  const response = await customFetch('/malls/rank/preview');
  if (!response.ok) {
    return [];
  }
  return response.json();
}
