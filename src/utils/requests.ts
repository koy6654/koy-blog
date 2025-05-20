import axios from 'axios';
import { PostFileData } from '@utils/functions/gray-matter';
import { BASE_DOMAIN } from '@utils/constants';
import { PageCounts, PagesType } from '@utils/types';

export const getMdxCount = async (): Promise<PageCounts> => {
  const { data: mdxCount } = await axios.get<PageCounts>(
    `${BASE_DOMAIN}/api/mdx-count`,
  );
  return mdxCount;
};

export const getMdxList = async (page: PagesType): Promise<PostFileData[]> => {
  const { data: mdxList } = await axios.get<PostFileData[]>(
    `${BASE_DOMAIN}/api/mdx-list?page=${page}`,
  );
  return mdxList;
};
