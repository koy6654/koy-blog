import { PAGES } from '@/utils/constants';
import { getPostFilePaths } from '@/utils/functions/gray-matter';
import { PageCounts } from '@/utils/types';

export async function GET() {
  try {
    const pages = Object.values(PAGES);

    const pageCounts: PageCounts = {
      [PAGES.CAREER]: 0,
      [PAGES.FRONTEND]: 0,
      [PAGES.BACKEND]: 0,
      [PAGES.INFRA]: 0,
    };

    pages.forEach((page) => {
      const paths = getPostFilePaths(page);
      pageCounts[page] = paths.length;
    });

    return new Response(JSON.stringify(pageCounts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
