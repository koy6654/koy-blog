import { Pages } from '@/utils/enums';
import { getPostFileDataByName } from '@/utils/functions/gray-matter';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const page = searchParams.get('page') as Pages;
    if (page == null) {
      throw new Error('af9062f2-a688-55ae-bb2e-c06d1d8093ea');
    }

    const post = getPostFileDataByName(page);

    return new Response(JSON.stringify(post), {
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
