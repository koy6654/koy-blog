import { LoadingContent } from '@/components/ui/loading';
import MdxViewer from '@components/pages/mdx-viewer';
import { MdxFiles } from '@utils/enums';
import { getPostFileDataByName } from '@utils/functions/gray-matter';
import { Suspense } from 'react';

async function CareerMdxViewerPage() {
	const post = getPostFileDataByName(MdxFiles.CAREER);

	return (
		<div>
			<main className="max-w-[940px] flex flex-col p-10 sm:p-20">
				<Suspense fallback={<LoadingContent />}>
					<MdxViewer page={MdxFiles.CAREER} />
				</Suspense>
			</main>
		</div>
	);
}

export default CareerMdxViewerPage;
