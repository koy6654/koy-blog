'use client';

import { PostPreview } from '@/components/pages/post-preview';
import { PAGES } from '@/utils/constants';

function BackendPostPreviewPage() {
  return (
    <main className="flex flex-col">
      <PostPreview page={PAGES.BACKEND} />
    </main>
  );
}

export default BackendPostPreviewPage;
