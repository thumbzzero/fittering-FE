import { customFetch, serverFetch } from '@/utils/customFetch';

export type MallRankingPreview = {
  id: number;
  name: string;
  image: string;
  isFavorite: boolean;
};

export type MallPreview = {
  id: number;
  name: string;
  image: string;
  description: string;
  view: number;
  isFavorite: boolean;
  products: {
    productId: number;
    productImage: string;
    productName: string;
  }[];
};

export type Mall = {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
  isFavorite: boolean;
};

export async function getRankedMallPreview(): Promise<MallRankingPreview[]> {
  const response = await customFetch('/malls/rank/preview');
  if (!response.ok) {
    return [];
  }
  return response.json();
}

export async function getMalls(
  filter: 'rank' | 'favorite_malls'
): Promise<MallPreview[]> {
  const response = await customFetch(`/malls/${filter}`);
  if (!response.ok) {
    return [];
  }
  return response.json();
}

export async function addFavorites(
  mallId: number | Promise<number>
): Promise<Response> {
  const response = await customFetch(`/favorites/${mallId}`, {
    method: 'POST',
  });
  return response;
}

export async function deleteFavorites(
  mallId: number | Promise<number>
): Promise<Response> {
  const response = await customFetch(`/favorites/${mallId}`, {
    method: 'DELETE',
  });
  return response;
}

export async function getMall(mallId: number): Promise<Mall> {
  const response = await customFetch(`/malls/${mallId}`);
  if (!response.ok) {
    return {} as Mall;
  }
  return response.json();
}

export async function getMallsList(): Promise<
  {
    id: number;
    name: string;
  }[]
> {
  const response = await serverFetch('/malls/list', {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    return [];
  }
  return response.json();
}
