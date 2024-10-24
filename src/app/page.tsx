import { Pages } from '@/utils/enums';
import { redirect } from 'next/navigation';

export default function Home() {
	redirect(`/${Pages.CAREER}`);
}
