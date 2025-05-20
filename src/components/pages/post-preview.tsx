'use client';

import { LoadingContent, LoadingMdxList } from '@/components/ui/loading';
import { PostFileData } from '@/utils/functions/gray-matter';
import { getMdxList } from '@/utils/requests';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pages } from '@/utils/constants';
import { PagesType } from '@/utils/types';

interface PostPreviewProps {
  page: PagesType;
}

export const PostPreview = ({ page }: PostPreviewProps) => {
  const router = useRouter();

  const [postFileDatas, setPostFileDatas] = useState<PostFileData[]>([]);
  const [isLoadingMdxList, setIsLoadingMdxList] = useState(true);
  const [isLoadingMdxContent, setIsLoadingMdxContent] = useState(false);

  useEffect(() => {
    const fetchMdxList = async (): Promise<void> => {
      const result = await getMdxList(page);
      setPostFileDatas(result);
    };

    fetchMdxList();
    setIsLoadingMdxList(false);
  }, []);

  const handleClick = (path: string) => {
    setIsLoadingMdxContent(true);

    setTimeout(() => {
      router.push(path);
    }, 0.2 * 1000);
  };

  if (isLoadingMdxContent) {
    return (
      <main className="max-w-[940px] flex flex-col p-10 sm:p-20">
        <LoadingContent />
      </main>
    );
  }

  if (isLoadingMdxList) {
    return (
      <main className="max-w-[940px] flex flex-col p-10 sm:p-20">
        <LoadingMdxList />
      </main>
    );
  }

  return (
    <main className="flex flex-col p-10 sm:p-20">
      {postFileDatas.map((file) => {
        const key = file.data.id;
        const date = file.data.date;
        const title = file.data.title;
        const description = file.data.description;

        return (
          <div
            key={key}
            role="button"
            tabIndex={0}
            onClick={() => handleClick(`/${page}/${key}`)}
            className="block text-left w-full cursor-pointer"
          >
            <div className="w-full h-full p-4">
              <div className="border border-gray-300 rounded-lg shadow-lg p-6 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-gray-600 dark:active:bg-gray-700 transition-shadow duration-300">
                <div className="text-xs">{date}</div>
                <div className="text-lg font-bold mb-4">{title}</div>
                <p className="text-sm mb-4">{description || ''}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};
