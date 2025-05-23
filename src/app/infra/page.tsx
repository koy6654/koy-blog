'use client';

import { PostPreview } from '@/components/pages/post-preview';
import { PAGES } from '@/utils/constants';

function InfraPostPreviewPage() {
  return (
    <main className="flex flex-col">
      <PostPreview page={PAGES.INFRA} />
    </main>
  );
}

export default InfraPostPreviewPage;
