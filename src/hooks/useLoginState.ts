import { ILoginState } from '@/interface/account';
import { ModalState } from '@/interface/accountModal';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { getLoginState } from '@/service/account';
import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

export default function useLoginState() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const { data: loginState } = useQuery<ILoginState>(
    ['loginState'],
    getLoginState
  );

  // 로그인 여부 체크 후, 로그인 안됐으면 로그인 창 띄우기
  const checkAuth = () => {
    if (!loginState?.loginState) {
      setModalState(ModalState.LoginForm);
      return false;
    }
    return true;
  };

  return loginState?.loginState
    ? {
        state: {
          loginState: loginState.loginState,
          userId: loginState.userId,
          nickname: loginState.nickname,
          profileImg: loginState.profileImg,
        },
        checkAuth,
      }
    : {
        state: {
          loginState: false,
          userId: null,
          nickname: null,
          profileImg: null,
        },
        checkAuth,
      };
}
