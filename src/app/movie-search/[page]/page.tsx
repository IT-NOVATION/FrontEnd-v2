import { useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { cookies } from 'next/headers';

export default async function MovieSearchPage() {
  const res = await fetch(
    'http://api.its-movietime.com:8080/api/v1/movie-search/star-score-order/1'
  );
  const repo = await res.json();
  console.log(repo);
  const cookieStore = cookies();
  const token = cookieStore.get('tokens');
  //   const { data } = useQuery(['movie-search'], () => {});
  return <></>;
}

export const getServerSideProps = async ({ page = 1 }) => {
  // Fetch the first page as default
  let userData = null;

  // Fetch data from external API
  try {
    const res = await fetch(`${process.env.FETCH_URL}/users?page=${page}`);
    if (res.status !== 200) {
      throw new Error('Failed to fetch');
    }
    userData = await res.json();
  } catch (err: any) {
    userData = { error: { message: err.message } };
  }

  // Pass data to the page via props
  return { props: { userData } };
};
