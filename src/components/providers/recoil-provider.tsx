'use client';

import { RecoilRoot } from 'recoil';
import React from 'react';

interface RecoilProviderProps {
  children: React.ReactNode;
}

export const RecoilProvider = ({ children }: RecoilProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
