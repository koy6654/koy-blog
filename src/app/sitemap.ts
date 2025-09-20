import { MetadataRoute } from 'next';
import { getPostFileDataByPath, getPostFilePaths } from '@/utils/functions/gray-matter';
import { BASE_DOMAIN, PAGES } from '@/utils/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [];
  const postRoutes = [];

  const pageValues = Object.values(PAGES);

  for (const pageValue of pageValues) {
    const staticRouteDates = [];

    const paths = getPostFilePaths(pageValue);

    for (const path of paths) {
      const fileData = await getPostFileDataByPath(path);
      const frontMatter = fileData.data;

      const frontMatterDate = new Date(frontMatter.date).toISOString();

      staticRouteDates.push(frontMatterDate);

      postRoutes.push({
        url: `${BASE_DOMAIN}/${pageValue}/${frontMatter.id}`,
        lastModified: frontMatterDate,
      });
    }

    const lastModified = staticRouteDates.reduce((a, b) => (new Date(a) > new Date(b) ? a : b));

    staticRoutes.push({
      url: `${BASE_DOMAIN}/${pageValue}`,
      lastModified: lastModified,
    });
  }

  return [...staticRoutes, ...postRoutes];
}
