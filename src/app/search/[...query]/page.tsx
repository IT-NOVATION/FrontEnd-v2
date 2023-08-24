import { SearchType } from '@/components/Search/SearchBox';

type Props = {
  params: {
    query: [type: SearchType, value: string];
  };
};
export default function SearchResultPage({
  params: {
    query: [type, value],
  },
}: Props) {
  console.log(type, value);
  return (
    <h1>
      search result: {type}, {value}
    </h1>
  );
}
