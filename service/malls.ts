import { customFetch } from '@/utils/customFetch';

export type MallPreview = {
  mallId: number;
  name: string;
  image: string;
};

export type Mall = {
  mallId: number;
  name: string;
  url: string;
  description: string;
  image: string;
  view: number;
};

export async function getRankedMallPreview(): Promise<MallPreview[]> {
  const response = await customFetch('/malls/rank/preview');
  return response.json();
}
