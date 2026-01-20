import axios from 'axios';
import { BASE_DOMAIN } from '@utils/constants';
import { MdxList, PageCounts, PagesType } from '@utils/types';

export const getMdxCount = async (): Promise<PageCounts> => {
  const { data: mdxCount } = await axios.get<PageCounts>(`${BASE_DOMAIN}/api/mdx-count`);
  return mdxCount;
};

export const getMdxList = async (page: PagesType, cursor: number, limit: number): Promise<MdxList> => {
  const { data: mdxList } = await axios.get<MdxList>(
    `${BASE_DOMAIN}/api/mdx-list?page=${page}&cursor=${cursor}&limit=${limit}`,
  );
  return mdxList;
};
