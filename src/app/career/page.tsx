import MdxViewer from '@components/pages/mdx-viewer';
import { Pages } from '@utils/enums';
import { getPostFileDataByName } from '@utils/functions/gray-matter';

async function CareerPage() {
	const post = getPostFileDataByName(Pages.CAREER);

	return (
		<div>
			<main className="flex flex-col p-10 sm:p-20">
				<MdxViewer content={post.content} />
			</main>
		</div>
	);
}

export default CareerPage;
