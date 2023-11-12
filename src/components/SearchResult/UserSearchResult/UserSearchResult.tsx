'use client';

import { IUserResult } from '@/interface/user';
import { getUserSearchResult } from '@/service/search';
import { useQuery } from '@tanstack/react-query';
import ResultCount from '../ResultCount/ResultCount';
import Users from './Users/Users';

type Props = {
  value: string;
};
export default function UserSearchResult({ value }: Props) {
  const { data } = useQuery<IUserResult>({
    queryKey: ['search', 'user', value],
    queryFn: () => getUserSearchResult(`userNm=${value}`),
  });
  return (
    <div>
      {data && (
        <>
          <ResultCount value={value} resultCount={data.totalSize} />
          <Users users={data.userSearchResponseDtoList} />
        </>
      )}
    </div>
  );
}
