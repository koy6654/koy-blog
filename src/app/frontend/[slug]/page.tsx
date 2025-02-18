import MdxViewer, { MdxViewerSlug } from '@/components/pages/mdx-viewer';
import { Suspense } from 'react';
import { LoadingContent } from '@/components/ui/loading';

async function ReactMdxViewerPage({ params }: MdxViewerSlug) {
  const page = params.slug;

  return (
    <div>
      <main className="max-w-[940px] flex flex-col p-10 sm:p-20">
        <Suspense fallback={<LoadingContent />}>
          <MdxViewer page={page} />
        </Suspense>
      </main>
    </div>
  );
}

export default ReactMdxViewerPage;
