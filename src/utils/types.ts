import { Pages } from './constants';

export type PagesKey = keyof typeof Pages;
export type PagesType = (typeof Pages)[PagesKey];
export type PageCounts = {
  [key in PagesType]: number;
};
