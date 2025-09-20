import { BASE_DOMAIN } from '@/utils/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    sitemap: `${BASE_DOMAIN}/sitemap.xml`,
  };
}
