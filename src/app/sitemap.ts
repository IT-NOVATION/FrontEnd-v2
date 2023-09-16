import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://its-movietime.com';

  // 무비로그 url
  const userIds = Array(30)
    .fill(0)
    .map((v, i) => i + 1);
  const usersUrl = userIds.map((id) => {
    return {
      url: `${baseUrl}/movielog/${id}`,
      lastModified: new Date(),
    };
  });

  // 영화 url
  const movieIds = Array(300)
    .fill(0)
    .map((v, i) => i + 1);
  const movieUrl = movieIds.map((id) => {
    return {
      url: `${baseUrl}/movie/${id}`,
      lastModified: new Date(),
    };
  });

  // 리뷰 url
  const reviewIds = Array(50)
    .fill(0)
    .map((v, i) => i + 1);
  const reviewUrl = reviewIds.map((id) => {
    return {
      url: `${baseUrl}/review/${id}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: 'https://its-movietime.com',
      lastModified: new Date(),
    },
    {
      url: 'https://its-movietime.com/movie-search',
      lastModified: new Date(),
    },
    {
      url: 'https://its-movietime.com/movie-talk',
      lastModified: new Date(),
    },
    ...usersUrl,
    ...movieUrl,
    ...reviewUrl,
  ];
}
