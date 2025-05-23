import { PAGES } from '@/utils/constants';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect(`/${PAGES.CAREER}`);
}
