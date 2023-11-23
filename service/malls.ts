import { Mall, MallPreview, MallRankingPreview } from '@/types/malls';
import { customFetch, serverFetch } from '@/utils/customFetch';

export async function getRankedMallPreview(): Promise<MallRankingPreview[]> {
  const response = await customFetch('/malls/rank/preview');
  if (!response.ok) {
    return [];
  }
  return response.json();
}

export async function getMalls(
  filter: 'rank' | 'favorite_malls' | 'preview/list'
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