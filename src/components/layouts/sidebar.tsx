'use client';

import { Divider } from '@components/ui/divider';
import { uppercaseFirstLetter } from '@/utils/functions/base';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getMdxCount } from '@/utils/requests';
import { Pages } from '@/utils/constants';
import { PageCounts } from '@/utils/types';

export function SideBar() {
  const currentPage = usePathname();

  const [pageCounts, setPageCounts] = useState<PageCounts | null>(null);
  const pages = Object.values(Pages);

  const getPosts = async (): Promise<void> => {
    const result = await getMdxCount();
    setPageCounts(result);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <aside className="min-w-[250px] h-full sticky top-0 hidden overflow-hidden sm:block py-24">
      <div className="w-full h-full flex flex-row">
        <div className="flex flex-col justify-end items-center flex-grow">
          <h2 className="text-lg font-bold pb-2">Menu</h2>
          <div className="flex items-center">
            <ul className="text-sm ml-4">
              {pages.map((page) => {
                const endpoint = `/${page}`;
                const isActive = currentPage.includes(endpoint);

                return (
                  <li key={page}>
                    <Link href={endpoint} className={`sidebar-block ${isActive ? 'sidebar-is-active' : ''}`}>
                      {uppercaseFirstLetter(page)}{' '}
                      {pageCounts == null ? <span className="inline-block w-8" /> : <>({pageCounts[page]})</>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Divider orientation="vertical" />
      </div>
    </aside>
  );
}
