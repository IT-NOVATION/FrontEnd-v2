'use client';

import { ModalState } from '@/interface/accountModal';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { useSetRecoilState } from 'recoil';

export default function Links() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const handleFindPassword = () => {
    setModalState(ModalState.GetCodeForm);
  };
  const handleSignup = () => {
    setModalState(ModalState.TermsForm);
  };
  return (
    <section className="flex flex-col items-center">
      <button onClick={handleFindPassword} className="mt-[24px] mb-[6px]">
        <span className=" text-theme-main text-body3">
          비밀번호를 잊어버리셨나요?
        </span>
      </button>
      <div className="mb-[25px]">
        <span className=" text-theme-darkGray text-body3">
          계정이 없으신가요?
        </span>
        <button onClick={handleSignup}>
          <span className="ml-[9px] text-theme-main text-body3">회원가입</span>
        </button>
      </div>
    </section>
  );
}
