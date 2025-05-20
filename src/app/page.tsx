import { Pages } from '@/utils/constants';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect(`/${Pages.CAREER}`);
}
