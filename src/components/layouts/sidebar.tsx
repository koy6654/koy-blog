'use client'

import Divider from '@components/ui/divider';
import { Pages } from '@/utils/enums';
import { uppercaseFirstLetter } from '@/utils/functions/base';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { PageCounts } from '@/app/api/mdx-count/route';
import { getPageCounts } from '@/utils/services';
import { LoadingContent, LoadingSidebar } from '@components/ui/loading';

function Sidebar() {
	const currentPage = usePathname();

	const [pageCounts, setPageCounts] = useState<PageCounts | null>(null);
	const pages = Object.values(Pages);

	const getPosts = async (): Promise<void> => {
		const result = await getPageCounts();
		setPageCounts(result);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<aside className="min-w-[250px] h-full sticky top-0 hidden overflow-hidden sm:block pt-24">
			<div className="w-full h-full flex flex-row">
				<div className="flex flex-col justify-end items-center flex-grow">
					<h2 className="text-lg font-bold pb-2">Menu</h2>
					<div className="flex items-center">
						<ul className="text-sm ml-4">
							{pages.map((page) => {
								const endpoint = `/${page}`;
								const isActive = currentPage.includes(endpoint);

								return (
									<li key={page}>
										<Link href={endpoint} className={`sidebar-block ${isActive ? 'sidebar-is-active' : ''}`}>
											{uppercaseFirstLetter(page)} {pageCounts == null ? <>&nbsp;&nbsp;&nbsp;&nbsp;</> : <>({pageCounts[page]})</>}
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
