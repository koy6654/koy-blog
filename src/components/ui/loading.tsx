'use client';

import Skeleton from '@components/ui/skeleton';
import { useEffect } from 'react';

const LoadingContent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="w-full rounded-lg shadow-lg">
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-4" />

        <div className="mt-4">
          <Skeleton className="h-40 w-full rounded-md mb-4" />
        </div>

        <Skeleton className="h-8 w-1/3 mx-auto" />
      </div>
    </div>
  );
};

const LoadingSidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-white">
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
      <Skeleton className="h-8 w-full mb-3 rounded-md" />
    </div>
  );
};

export { LoadingContent, LoadingSidebar };
