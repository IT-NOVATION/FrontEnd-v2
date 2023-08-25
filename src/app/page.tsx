import Banners from '@/components/Main/Banners/Banners';
import MovieTime from '@/components/Main/MovieTime/MovieTime';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Banners />
      <MovieTime />
    </main>
  );
}
