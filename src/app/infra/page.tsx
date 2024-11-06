import PostPreview from '@/components/pages/post-preview';
import { Pages } from '@/utils/enums';
import { getPostFileDataByPath, getPostFilePaths } from '@/utils/functions/gray-matter';
import Link from 'next/link';

function InfraPage() {
  const paths = getPostFilePaths(Pages.INFRA);

  const postFileDatas = paths.map((path) => {
    return getPostFileDataByPath(path);
  })

  return (
    <div>
      <main className="flex flex-col p-10 sm:p-20">
        {postFileDatas.map((file, index) => (
          <Link key={index} href={`/${Pages.INFRA}/${file.data.id}`} passHref>
            <PostPreview key={index} date={file.data.date} title={file.data.title} description={file.data.description}></PostPreview>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default InfraPage;