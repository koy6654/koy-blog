'use client';

import { PostPreviewPageLayout } from '@/components/layouts/page-layout';
import { PostPreview } from '@/components/pages/post-preview';
import { PAGES } from '@/utils/constants';

function InfraPostPreviewPage() {
  return (
    <PostPreviewPageLayout>
      <PostPreview page={PAGES.INFRA} />
    </PostPreviewPageLayout>
  );
}

export default InfraPostPreviewPage;
