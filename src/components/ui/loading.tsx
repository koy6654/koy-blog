'use client';

import Skeleton from '@components/ui/skeleton';
import { useEffect } from 'react';

export const LoadingContent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col justify-start items-center p-4">
      <div className="w-full rounded-lg shadow-lg">
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-4" />

        <div className="mt-4">
          <Skeleton className="h-40 w-full rounded-md mb-4" />
        </div>

        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-4" />
      </div>
    </div>
  );
};

const LoadingSidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
    </div>
  );
};

export const LoadingMdxList = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-full rounded-lg shadow-lg p-4">
        <Skeleton className="w-full h-36 mb-8" />
        <Skeleton className="w-full h-36 mb-8" />
        <Skeleton className="w-full h-36 mb-8" />
        <Skeleton className="w-full h-36 mb-8" />
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <Skeleton className="w-52 h-12 mb-8" />
      </div>
    </div>
  );
};
