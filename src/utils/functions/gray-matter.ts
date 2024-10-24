import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';
import { Pages } from '@utils/enums';

const postsDirectory = path.join(process.cwd(), 'src/app');

export async function getPostFilePaths(): Promise<string[]> {
  const postPaths: string[] = sync(`${postsDirectory}/**/*.mdx`);
  return postPaths;
}

export async function getPostFilePath(fileName: Pages): Promise<string> {
  const postPaths: string[] = sync(
    `${postsDirectory}/${fileName}/**/${fileName}.mdx`,
  );
  if (postPaths.length === 0) {
    throw new Error('ba12171d-f3a1-5bce-b141-70460c71b307');
  }

  return postPaths[0];
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

export async function getPostFileData(fileName: Pages) {
  const filePath = await getPostFilePath(fileName);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(markdownWithMeta);

  return { data, content };
}
