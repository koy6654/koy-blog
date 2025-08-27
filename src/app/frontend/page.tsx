'use client';

import { PostPreviewPageLayout } from '@/components/layouts/page-layout';
import { PostPreview } from '@/components/pages/post-preview';
import { PAGES } from '@/utils/constants';

function FrontendPostPreviewPage() {
  return (
    <PostPreviewPageLayout>
      <PostPreview page={PAGES.FRONTEND} />
    </PostPreviewPageLayout>
  );
}

export default FrontendPostPreviewPage;
