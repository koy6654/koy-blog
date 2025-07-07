'use client';

import { LoadingContent, LoadingMdxList } from '@/components/ui/loading';
import { PostFileData } from '@/utils/functions/gray-matter';
import { getMdxList } from '@/utils/requests';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PagesType } from '@/utils/types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@components/ui/pagination';
import BigNumber from 'bignumber.js';

interface PostPreviewProps {
  page: PagesType;
}

export const PostPreview = ({ page }: PostPreviewProps) => {
  const pageLimit = 5;
  const pageGroupLimit = 5;

  const router = useRouter();

  const [postFileDatas, setPostFileDatas] = useState<PostFileData[]>([]);

  const [cursor, setCursor] = useState<number>(1);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
  const [currentPageGroup, setCurrentPageGroup] = useState<number>(0);
  const [totalPageGroup, setTotalPageGroup] = useState<number>(0);

  const [isLoadingMdxList, setIsLoadingMdxList] = useState(true);
  const [isLoadingMdxContent, setIsLoadingMdxContent] = useState(false);

  useEffect(() => {
    const fetchMdxList = async (): Promise<void> => {
      const result = await getMdxList(page, cursor, pageLimit);
      const total = result.total;
      const files = result.files;

      setPostFileDatas(files);

      const totalPages = new BigNumber(total).dividedBy(pageLimit).integerValue(BigNumber.ROUND_CEIL).toNumber();

      const currentGroup = new BigNumber(cursor - 1).dividedToIntegerBy(pageGroupLimit).toNumber();

      const totalGroups = new BigNumber(totalPages)
        .dividedBy(pageGroupLimit)
        .integerValue(BigNumber.ROUND_CEIL)
        .toNumber();

      setCurrentPageNumber(totalPages);
      setCurrentPageGroup(currentGroup);
      setTotalPageGroup(totalGroups);
    };

    setIsLoadingMdxList(true);

    fetchMdxList();
  }, [cursor]);

  useEffect(() => {
    if (postFileDatas.length !== 0) {
      setIsLoadingMdxList(false);
    }
  }, [postFileDatas]);

  const handleClick = (path: string) => {
    setIsLoadingMdxContent(true);

    setTimeout(() => {
      router.push(path);
    }, 0.1 * 1000);
  };

  if (isLoadingMdxList) {
    return (
      <main className="max-w-[940px] flex flex-col p-10 sm:p-20">
        <LoadingMdxList />
      </main>
    );
  }

  if (isLoadingMdxContent) {
    return (
      <main className="max-w-[940px] flex flex-col p-10 sm:p-20">
        <LoadingContent />
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
              <div className="border border-gray-300 rounded-lg shadow-lg p-6 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-gray-500 dark:active:bg-gray-600 transition-shadow duration-300">
                <div className="text-xs">{date}</div>
                <div className="text-lg font-bold mb-4">{title}</div>
                <p className="text-sm mb-4">{description || ''}</p>
              </div>
            </div>
          </div>
        );
      })}

      <Pagination className="pt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCursor((currentPageGroup - 1) * pageGroupLimit + 1)}
              showIcon={currentPageGroup > 0}
            />
          </PaginationItem>

          {Array.from({ length: pageGroupLimit }).map((_, index) => {
            const startPage = currentPageGroup * pageGroupLimit + 1;
            const pageNumber = startPage + index;

            if (pageNumber > currentPageNumber) return null;

            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink isActive={pageNumber === cursor} onClick={() => setCursor(pageNumber)}>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              onClick={() => setCursor((currentPageGroup + 1) * pageGroupLimit + 1)}
              showIcon={currentPageGroup < totalPageGroup - 1}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
};
