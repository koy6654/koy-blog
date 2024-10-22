import { MdxComponents } from '@/components/mdx/index';
import { getPostFileData } from '@/utils/functions/gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

async function CareerPage() {
	const post = await getPostFileData('career');

	return (
		<div>
			<main className="flex flex-col p-20">
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

export default CareerPage;
