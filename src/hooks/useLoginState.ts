import { ILoginState } from '@/interface/account';
import { getLoginState } from '@/service/account';
import { useQuery } from '@tanstack/react-query';

export default function useLoginState() {
  const {
    data: loginState,
  } = useQuery<ILoginState>(['loginState'], getLoginState, {
    cacheTime: 3600,
    staleTime: 3600,
    retry: 1,
  });


  return loginState?.loginState
    ? {
        loginState: loginState.loginState,
        userId: loginState.userId,
        nickname: loginState.nickname,
        profileImg: loginState.profileImg,
      }
    : {
        loginState: false,
        userId: null,
        nickname: null,
        profileImg: null,
      };
}
