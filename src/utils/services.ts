import axios from 'axios';
import { PostFileData } from '@utils/functions/gray-matter';
import { BASE_DOMAIN } from '@utils/constants';
import { PageCounts } from '@/app/api/mdx-count/route';

export const getPageCounts = async (): Promise<PageCounts> => {
  const { data: pageCounts } = await axios.get<PageCounts>(
    `${BASE_DOMAIN}/api/mdx-count`,
  );
  return pageCounts;
};

export const getPost = async (
  params: Record<string, string>,
): Promise<PostFileData> => {
  const { data: postFileData } = await axios.get<PostFileData>(
    `${BASE_DOMAIN}/api/mdx`,
    { params },
  );
  return postFileData;
};
