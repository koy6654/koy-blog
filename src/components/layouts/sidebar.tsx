import Divider from '@/components/ui/divider';
import { Pages } from '@/utils/enums';
import { uppercaseFirstLetter } from '@/utils/functions/base';
import Link from 'next/link';

function Sidebar() {
	const pages = Object.values(Pages);

	return (
		<aside className="w-[250px] h-full sticky top-0 hidden overflow-hidden sm:block pt-56">
			<div className="h-full flex flex-row">
				<div className="flex flex-col justify-end items-center flex-grow">
					<h2 className="text-lg font-bold">Menu</h2>
					<div className="flex items-center">
						<ul className="text-sm ml-4">
							{pages.map((page) => {
								const endpoint = `/${page}`;
								return (
									<li key={page}>
										<Link href={endpoint} className="block py-2">
											{uppercaseFirstLetter(page)}
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

export default Sidebar;
