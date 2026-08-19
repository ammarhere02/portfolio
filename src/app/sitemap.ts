import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { projects } from '@/utils/projectData'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
