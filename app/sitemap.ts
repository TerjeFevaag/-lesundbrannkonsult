import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.aalesundbrannkonsult.no'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/brannkonsept`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/brannprosjektering`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/branntilsyn`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/uavhengig-kontroll`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/om-oss`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/kontakt-oss`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/artikler/pipebrann`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/brannslokker`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/roykvarsler`, changeFrequency: 'yearly', priority: 0.6 },
  ]
}
