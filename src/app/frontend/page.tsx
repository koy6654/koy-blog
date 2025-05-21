'use client';

import { PostPreview } from '@/components/pages/post-preview';
import { Pages } from '@/utils/constants';

function FrontendPostPreviewPage() {
  return (
    <main className="flex flex-col">
      <PostPreview page={Pages.FRONTEND} />
    </main>
  );
}

export default FrontendPostPreviewPage;
