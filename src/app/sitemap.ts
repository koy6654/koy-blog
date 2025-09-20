import { MetadataRoute } from 'next';
import { getPostFilePaths } from '@/utils/functions/gray-matter';
import path from 'path';
import fs from 'fs';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://koy-blog.vercel.app';

  const staticRoutes = [
    '/',
    '/career',
    '/backend',
    '/frontend',
    '/infra',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const postPaths = getPostFilePaths();
  const postRoutes = postPaths.map((filePath) => {
    const slug = path.basename(filePath, '.mdx');
    const category = path.basename(path.dirname(filePath));
    const stats = fs.statSync(filePath);

    return {
      url: `${siteUrl}/${category}/${slug}`,
      lastModified: stats.mtime.toISOString(),
    };
  });

  return [...staticRoutes, ...postRoutes];
}
