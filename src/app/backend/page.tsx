'use client';

import { PostPreview } from '@/components/pages/post-preview';
import { Pages } from '@/utils/constants';

function BackendPostPreviewPage() {
  return (
    <main className="flex flex-col">
      <PostPreview page={Pages.BACKEND} />
    </main>
  );
}

export default BackendPostPreviewPage;
