import { Keywords } from '@/types/search';
import { fetchWithoutToken } from '@/utils/customFetch';

export async function getSearchKeywords(keyword: string): Promise<Keywords> {
  const response = await fetchWithoutToken(`/search/${keyword}`);
  if (!response.ok) {
    return { products: [], malls: [] };
  }
  return await response.json();
}
