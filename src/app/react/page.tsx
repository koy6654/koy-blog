import { MdxComponents } from '@/components/mdx/index';
import { Pages } from '@/utils/enums';
import { getPostFileData } from '@/utils/functions/gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

async function ReactPage() {
	const post = await getPostFileData(Pages.REACT);

	return (
		<div>
			<main className="flex flex-col p-10 sm:p-20">
				<MDXRemote
					source={post.content}
					options={{
						parseFrontmatter: true,
						mdxOptions: {
							remarkPlugins: [],
							rehypePlugins: []
						}
					}}
					components={MdxComponents}
				/>
			</main>
		</div>
	);
}

export default ReactPage;
