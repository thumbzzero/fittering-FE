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