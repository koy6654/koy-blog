import { LoadingContent } from '@/components/ui/loading';
import { MdxFiles } from '@/utils/enums';
import { MdxViewer } from '@components/pages/mdx-viewer';
import { Suspense } from 'react';

async function CareerMdxViewerPage() {
  return (
    <div>
      <main className="mx-auto flex flex-col p-10 sm:p-20">
        <Suspense fallback={<LoadingContent />}>
          <MdxViewer page={MdxFiles.CAREER} />
        </Suspense>
      </main>
    </div>
  );
}

export default CareerMdxViewerPage;
