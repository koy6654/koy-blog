import { PAGES } from '@utils/constants';
import { PostFileData } from '@utils/functions/gray-matter';

export type PagesKey = keyof typeof PAGES;
export type PagesType = (typeof PAGES)[PagesKey];
export type PageCounts = {
  [key in PagesType]: number;
};

export type MdxList = {
  total: number;
  files: PostFileData[];
};
