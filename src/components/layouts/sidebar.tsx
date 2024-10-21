import Divider from '@/components/ui/divider';
import Link from 'next/link';

function Sidebar() {
	return (
		<aside className="w-[200px] h-full sticky top-0 overflow-hidden hidden sm:block">
			<div className="flex flex-col justify-center h-full">
				<h2 className="text-lg font-bold">Sidebar</h2>
				<div className="flex items-center">
					<Divider orientation="vertical" />
					<ul className="ml-4">
						<li>
							<Link href="/main" className="block py-2">
								Main
							</Link>
						</li>
						<li>
							<Link href="/career" className="block py-2">
								Career
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
