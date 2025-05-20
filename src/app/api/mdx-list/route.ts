import { Pages } from '@/utils/constants';
import {
  getPostFileDataByName,
  getPostFileDataByPath,
  getPostFilePaths,
} from '@/utils/functions/gray-matter';
import { PagesType } from '@/utils/types';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const page = searchParams.get('page') as PagesType;
    if (page == null) {
      throw new Error('af9062f2-a688-55ae-bb2e-c06d1d8093ea');
    }

    const paths = getPostFilePaths(page);

    const postFileDatas = await Promise.all(
      paths.map((path) => getPostFileDataByPath(path)),
    );

    postFileDatas.sort((a, b) => b.data.date.localeCompare(a.data.date));

    return new Response(JSON.stringify(postFileDatas), {
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
