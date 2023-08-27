'use client';

import { ModalState } from '@/interface/accountModal';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AnimatePresence, motion } from 'framer-motion';
import Exit from '@/ui/icons/ExitIcon';
import LoginForm from './contents/LoginForm/LoginForm';
import AddProfileForm from './contents/AddProfileForm';
import ChangePasswordForm from './contents/ChangePasswordForm';
import GetCodeForm from './contents/GetCodeForm';
import Policy from './contents/Policy';
import SignupForm from './contents/SignupForm';
import Terms from './contents/Terms';
import TermsForm from './contents/TermsForm';

export default function AccountModal() {
  const [modalState, setModalState] =
    useRecoilState<ModalState>(modalStateAtom);
  const modalContent = () => {
    switch (modalState) {
      case ModalState.LoginForm:
        return <LoginForm />;
      case ModalState.TermsForm:
        return <TermsForm />;
      case ModalState.SignupForm:
        return <SignupForm />;
      case ModalState.AddProfileForm:
        return <AddProfileForm />;
      case ModalState.Terms:
        return <Terms />;
      case ModalState.Policy:
        return <Policy />;
      case ModalState.GetCodeForm:
        return <GetCodeForm />;
      case ModalState.ChangePasswordForm:
        return <ChangePasswordForm />;
    }
  };

  const handleExit = () => {
    setModalState(0);
  };
  return (
    <>
      <AnimatePresence>
        {modalState && (
          <>
            <div
              onClick={handleExit}
              className="fixed top-0 left-0 flex flex-col justify-center items-center w-[100vw] h-[100vh] z-[30] bg-[#0000004d]"
            />
            <motion.section
              className="w-[629px] h-[100vh] fixed right-0 bg-white pl-[84px] z-50"
              initial={{ opacity: 1, x: 700 }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: 700 }}
            >
              <button
                className="absolute top-[45px] right-[45px] "
                onClick={handleExit}
              >
                <Exit className=" w-[30px] h-[30px]" />
              </button>
              <p className="text-title3 mt-[87px]">
                It’s MOVIE TIME에 {'\n'} 오신 것을 환영합니다.
              </p>
              {modalContent()}
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
