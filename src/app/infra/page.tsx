'use client';

import { PostPreview } from '@/components/pages/post-preview';
import { Pages } from '@/utils/constants';

function InfraPostPreviewPage() {
  return (
    <main className="flex flex-col">
      <PostPreview page={Pages.INFRA} />
    </main>
  );
}

export default InfraPostPreviewPage;
