'use client';

import { ModalState } from '@/interface/accountModal';
import {
  modalContentSelector,
  modalStateAtom,
} from '@/recoil/accountModalAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AnimatePresence, motion } from 'framer-motion';
import Exit from '@/ui/icons/Exit';

export default function AccountModal() {
  const [modalState, setModalState] =
    useRecoilState<ModalState>(modalStateAtom);
  const modalContent = useRecoilValue(modalContentSelector);
  const handleExit = () => {
    setModalState(0);
  };
  console.log(modalState, modalContent);
  return (
    <>
      <AnimatePresence>
        {modalState && (
          <>
            <div
              onClick={handleExit}
              className="fixed top-0 left-0 flex flex-col justify-center items-center w-[100vw] h-[100vh] z-20 bg-[#0000004d]"
            />
            <motion.section
              className="w-[659px] h-[100vh] fixed right-0 bg-white pl-[84px] z-50"
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
              {modalContent}
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
