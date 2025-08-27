'use client';

import { PostPreviewPageLayout } from '@/components/layouts/page-layout';
import { PostPreview } from '@/components/pages/post-preview';
import { PAGES } from '@/utils/constants';

function BackendPostPreviewPage() {
  return (
    <PostPreviewPageLayout>
      <PostPreview page={PAGES.BACKEND} />
    </PostPreviewPageLayout>
  );
}

export default BackendPostPreviewPage;
