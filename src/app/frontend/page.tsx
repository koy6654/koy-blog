'use client';

import { PostPreview } from '@/components/pages/post-preview';
import { PAGES } from '@/utils/constants';

function FrontendPostPreviewPage() {
  return (
    <main className="flex flex-col">
      <PostPreview page={PAGES.FRONTEND} />
    </main>
  );
}

export default FrontendPostPreviewPage;
