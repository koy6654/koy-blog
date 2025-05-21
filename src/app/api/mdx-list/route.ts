import { getPostFileDataByPath, getPostFilePaths } from '@/utils/functions/gray-matter';
import { PagesType } from '@/utils/types';
import { NextRequest } from 'next/server';
import BigNumber from 'bignumber.js';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const page = searchParams.get('page') as PagesType;
    const cursor = searchParams.get('cursor') as string;
    const limit = searchParams.get('limit') as string;
    if (page == null || cursor == null || limit == null) {
      throw new Error('af9062f2-a688-55ae-bb2e-c06d1d8093ea');
    }

    const paths = getPostFilePaths(page);

    const postFileDatas = await Promise.all(paths.map((path) => getPostFileDataByPath(path)));

    const startOffset = new BigNumber(cursor).minus(1).multipliedBy(limit).toNumber();

    const endOffset =
      startOffset === 0 ? new BigNumber(limit).toNumber() : new BigNumber(startOffset).plus(limit).toNumber();

    const total = paths.length;
    const files = postFileDatas.sort((a, b) => b.data.date.localeCompare(a.data.date)).slice(startOffset, endOffset);

    return new Response(
      JSON.stringify({
        total,
        files,
      }),
    );
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
