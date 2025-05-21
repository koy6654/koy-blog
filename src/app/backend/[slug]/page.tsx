import { MdxViewer, MdxViewerSlug } from '@/components/pages/mdx-viewer';

async function BackendMdxViewerPage({ params }: MdxViewerSlug) {
  const page = params.slug;

  return (
    <div>
      <main className="max-w-[940px] flex flex-col p-10 sm:p-20">
        <MdxViewer page={page} />
      </main>
    </div>
  );
}

export default BackendMdxViewerPage;
