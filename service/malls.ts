import { readFile } from 'fs/promises';
import path from 'path';

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
  // 더미 데이터 읽어옴
  const filePath = path.join(process.cwd(), 'data', 'malls.json');
  return readFile(filePath, 'utf-8').then<MallPreview[]>(JSON.parse);
}
