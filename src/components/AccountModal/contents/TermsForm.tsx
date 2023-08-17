'use client';

import useBtnIsAbled from '@/hooks/useBtnIsAbled';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function TermsForm() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false); //전체 동의
  const [termsAgreed, setTermsAgreed] = useState(false); //이용약관
  const toggleTermsAgreed = () => setTermsAgreed((prev) => !prev);
  const [policyAgreed, setPolicyAgreed] = useState(false); //개인정보처리방침
  const togglePolicyAgreed = () => setPolicyAgreed((prev) => !prev);
  const toggleAgreeAll = () =>
    //전체 동의 클릭시
    setAgreeAll((prev) => {
      if (prev) {
        setTermsAgreed(false);
        setPolicyAgreed(false);
      } else {
        setTermsAgreed(true);
        setPolicyAgreed(true);
      }
      return !prev;
    });
  useEffect(() => {
    if (termsAgreed && policyAgreed) {
      setAgreeAll(true);
      setIsAllChecked(true);
    } else {
      setAgreeAll(false);
      setIsAllChecked(false);
    }
  }, [termsAgreed, policyAgreed]);

  const handleGoToNextStep = () => setModalState(3); //다음 버튼 클릭

  const handleGoWatchTerms = () => setModalState(5); //이용약관 보기
  const handleGoWatchPolicy = () => setModalState(6); //개인정보처리방침 보기

  const handleGoLogin = () => setModalState(1); //'로그인'클릭

  return (
    <section className="w-[400px] text-theme-darkGray">
      <form className="w-full">
        <p className="mt-[28px] mb-[40px] text-body3 text-black">회원가입</p>
        <div className="relative mb-[8px] flex items-center">
          <input
            onChange={toggleAgreeAll}
            id="agreeAll"
            type="checkbox"
            className="w-[16px] h-[16px] mr-[11px]"
            checked={agreeAll}
          />
          <label htmlFor="agreeAll">
            <span className="text-body3">전체 동의</span>
          </label>
        </div>
        <hr />
        <div className="relative mt-[10px] flex items-center">
          <input
            onChange={toggleTermsAgreed}
            id="termsAgreed"
            type="checkbox"
            className="w-[16px] h-[16px] mr-[11px]"
            checked={termsAgreed}
          />
          <label htmlFor="termsAgreed">
            <span className="text-body3 mr-[7px]">이용약관 동의(필수)</span>
            <span onClick={handleGoWatchTerms}>{'>'}</span>
          </label>
        </div>
        <div className="relative mt-[4px] mb-[31px] flex items-center">
          <input
            id="policyAgreed"
            type="checkbox"
            onChange={togglePolicyAgreed}
            className="w-[16px] h-[16px] mr-[11px]"
            checked={policyAgreed}
          />
          <label htmlFor="policyAgreed">
            <span className="text-body3 mr-[7px]">
              개인정보 처리방침 (필수)
            </span>
            <span onClick={handleGoWatchPolicy}>{'>'}</span>
          </label>
        </div>
        <button
          onClick={handleGoToNextStep}
          disabled={!isAllChecked}
          className={`flex justify-center items-center w-[406px] h-[48px] rounded-[25.5px] text-white ${
            isAllChecked ? 'bg-theme-main' : 'bg-theme-gray'
          }`}
        >
          <p className="text-body1">다음</p>
        </button>
      </form>
      <div className="flex justify-center gap-[9px] mt-[10px]">
        <p className="text-black body-3">이미 가입하셨나요?</p>
        <button>
          <p onClick={handleGoLogin} className="text-theme-main text-body3">
            로그인
          </p>
        </button>
      </div>
    </section>
  );
}
