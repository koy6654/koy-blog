import { MdxViewerPageLayout } from '@/components/layouts/page-layout';
import { LoadingContent } from '@/components/ui/loading';
import { MdxFiles } from '@/utils/enums';
import { MdxViewer } from '@components/pages/mdx-viewer';
import { Suspense } from 'react';

// Career만 페이지 형식이 다름
async function CareerMdxViewerPage() {
  return (
    <MdxViewerPageLayout>
      <Suspense fallback={<LoadingContent />}>
        <MdxViewer page={MdxFiles.CAREER} />
      </Suspense>
    </MdxViewerPageLayout>
  );
}

export default CareerMdxViewerPage;
