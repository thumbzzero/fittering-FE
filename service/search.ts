import { serverFetch } from '@/utils/customFetch';

export type Keywords = {
  products: {
    id: number;
    name: string;
    image: string;
  }[];
  malls: {
    id: number;
    name: string;
    image: string;
  }[];
};

export async function getSearchKeywords(keyword: string): Promise<Keywords> {
  const response = await serverFetch(`/search/${keyword}`);
  if (!response.ok) {
    return { products: [], malls: [] };
  }
  return await response.json();
}
