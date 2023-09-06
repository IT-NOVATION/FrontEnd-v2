import Banners from '@/components/Main/Banners/Banners';
import Footer from '@/components/Main/Footer/Footer';
import MovieTime from '@/components/Main/MovieTime/MovieTime';
import ReviewTime from '@/components/Main/ReviewTime/ReviewTime';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: `It's Movie Time`,
    template: `It's Movie Time | %s`,
  },
  description: '나만의 영화를 기록하는 시간',
  openGraph: {
    title: `It's Movie Time`,
    description: '나만의 영화를 기록하는 시간',
    url: 'http://its-movietime.com',
    siteName: `It's Movie Time`,
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Banners />
      <MovieTime />
      <ReviewTime />
      <Footer />
    </main>
  );
}
