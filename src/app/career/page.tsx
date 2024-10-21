import { MdxComponents } from '@/components/mdx/index';
import { getPostFileDatas } from '@/utils/functions/gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

async function CareerPage() {
	const posts = await getPostFileDatas();
	console.log(posts[0].content);
	return (
		<div>
			<main className="flex flex-col p-20">
				<MDXRemote
					source={posts[1].content}
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
