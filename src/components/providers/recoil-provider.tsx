'use client';

import { RecoilRoot } from 'recoil';
import React from 'react';

interface RecoilProviderProps {
  children: React.ReactNode;
}

const RecoilProvider = ({ children }: RecoilProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
