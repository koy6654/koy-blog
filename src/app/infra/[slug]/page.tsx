import { MdxViewerPageLayout } from '@/components/layouts/page-layout';
import { MdxViewer, MdxViewerSlug } from '@/components/pages/mdx-viewer';

async function InfraMdxViewerPage({ params }: MdxViewerSlug) {
  const page = params.slug;

  return (
    <MdxViewerPageLayout>
      <MdxViewer page={page} />
    </MdxViewerPageLayout>
  );
}

export default InfraMdxViewerPage;
