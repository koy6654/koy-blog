import { MdxViewer, MdxViewerSlug } from '@/components/pages/mdx-viewer';

async function InfraMdxViewerPage({ params }: MdxViewerSlug) {
  const page = params.slug;

  return (
    <div>
      <main className="mx-auto flex flex-col p-10 sm:p-20">
        <MdxViewer page={page} />
      </main>
    </div>
  );
}

export default InfraMdxViewerPage;
