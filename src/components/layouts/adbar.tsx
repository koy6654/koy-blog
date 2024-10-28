import { Pages } from '@/utils/enums';

function AdBar() {
	const pages = Object.values(Pages);

	return (
		<aside className="min-w-[250px] h-full sticky top-0 hidden overflow-hidden sm:block pt-56">
		</aside>
	);
}

export default AdBar;
