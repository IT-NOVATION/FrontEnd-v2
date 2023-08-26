import Banners from '@/components/Main/Banners/Banners';
import Footer from '@/components/Main/Footer/Footer';
import MovieTime from '@/components/Main/MovieTime/MovieTime';
import ReviewTime from '@/components/Main/ReviewTime/ReviewTime';

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
