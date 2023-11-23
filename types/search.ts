export type Products = {
  id: number;
  name: string;
  image: string;
};

export type Malls = {
  id: number;
  name: string;
  image: string;
};

export type Keywords = {
  products: Products[];
  malls: Malls[];
};