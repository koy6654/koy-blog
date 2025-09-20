import { MdxViewerPageLayout } from '@/components/layouts/page-layout';
import { MdxViewer, MdxViewerSlug } from '@/components/pages/mdx-viewer';
import { getPostFilePaths, getPostFileDataByPath } from '@/utils/functions/gray-matter';
import { Metadata } from 'next';
import path from 'path';

export async function generateMetadata({ params }: MdxViewerSlug): Promise<Metadata> {
  const { slug } = params;
  const postFilePath = getPostFilePaths('backend').find((p) => p.includes(slug));

  if (!postFilePath) {
    return {
      title: 'Post Not Found',
      description: 'This post could not be found.',
    };
  }

  const { data: postData } = await getPostFileDataByPath(postFilePath);

  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      url: `/backend/${slug}`,
      siteName: 'Koy Blog',
      images: [
        {
          url: '/images/koy.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'ko_KR',
      type: 'article',
      publishedTime: postData.date,
    },
  };
}

export async function generateStaticParams() {
  const postPaths = getPostFilePaths('backend');
  return postPaths.map((filePath) => ({
    slug: path.basename(filePath, '.mdx'),
  }));
}

async function BackendMdxViewerPage({ params }: MdxViewerSlug) {
  const page = params.slug;

  return (
    <MdxViewerPageLayout>
      <MdxViewer page={page} />
    </MdxViewerPageLayout>
  );
}

export default BackendMdxViewerPage;
