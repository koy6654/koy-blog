import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';

const postsDirectory = path.join(process.cwd(), 'src/app');

export async function getPostFilePaths(): Promise<string[]> {
  const postPaths: string[] = sync(`${postsDirectory}/**/*.mdx`);
  return postPaths;
}

export async function getPostFileDatas() {
  const filesPaths = await getPostFilePaths();

  const posts = filesPaths.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(markdownWithMeta);

    return { data, content };
  });

  return posts;
}
