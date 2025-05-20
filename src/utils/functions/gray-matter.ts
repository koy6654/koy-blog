import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { sync } from 'glob';
import { MdxFiles } from '@utils/enums';

interface GrayMatterData {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface PostFileData {
  data: GrayMatterData;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/app');

export function getPostFilePaths(target?: string): string[] {
  let targetDirectory = '';
  if (target != null) {
    targetDirectory = `/${target}`;
  }

  const postPaths: string[] = sync(
    `${postsDirectory}${targetDirectory}/**/*.mdx`,
  );

  return postPaths;
}

export function getPostFilePath(fileName: MdxFiles): string {
  const postPaths: string[] = sync(`${postsDirectory}/**/${fileName}.mdx`);
  if (postPaths.length === 0) {
    throw new Error('ba12171d-f3a1-5bce-b141-70460c71b307');
  }

  return postPaths[0];
}

export async function getPostFileDataByPath(
  filePath: string,
): Promise<PostFileData> {
  const markdownWithMeta = await fs.promises.readFile(filePath, 'utf-8');
  const { data, content }: GrayMatterFile<string> = matter(markdownWithMeta);

  return { data: data as GrayMatterData, content };
}

export async function getPostFileDataByName(
  fileName: MdxFiles,
): Promise<PostFileData> {
  const filePath = getPostFilePath(fileName);

  return await getPostFileDataByPath(filePath);
}
