import FooterLogo from '@/ui/icons/FooterLogo';
import InstagramIcon from '@/ui/icons/InstagramIcon';
import KakaoIcon from '@/ui/icons/KakaoIcon';
import NaverIcon from '@/ui/icons/NaverIcon';
import Image from 'next/image';

const sns = [
  {
    name: 'instagram',
    icon: <InstagramIcon />,
    link: 'https://instagram.com/movie_time_729?igshid=ZDc4ODBmNjlmNQ== ',
  },
  { name: 'kakao', icon: <KakaoIcon />, link: 'https://pf.kakao.com/_xlglqG' },
  {
    name: 'naver',
    icon: <NaverIcon />,
    link: 'https://blog.naver.com/its_movie_time',
  },
];

export default function Footer() {
  return (
    <footer className="w-[100vw] bg-[#f4f7f9] h-[100px] flex items-center justify-center">
      <div className="w-[763px] flex justify-between items-center">
        <section className="flex">
          <div className="w-[171px] h-[44px] border-r border-[rgb(179, 179, 179)] flex items-center">
            <FooterLogo />
          </div>
          <div className="ml-[24px] flex flex-col justify-between">
            <div className="flex gap-[27px] justify-between">
              <p className="text-theme-darkGray text-[11px] font-[400]">
                이용약관
              </p>
              <p className="text-theme-darkGray text-[11px] font-[400]">
                개인정보처리방침
              </p>
              <p className="text-theme-darkGray text-[11px] font-[400]">
                ITNOVATION
              </p>
            </div>
            <div className="flex">
              <p className="text-theme-darkGray text-[11px] font-[400]">
                © IT’s MOVIE TIME. All right reserved
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-[198px] h-[44px] items-end justify-between">
          <ul className="flex w-full gap-[8px] justify-end">
            {sns.map(({ name, icon, link }) => (
              <li key={name}>
                <a href={link}>{icon}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-[9px]">
            <p className="text-theme-darkGray text-[11px] font-[400]">
              Contact
            </p>
            <p className="text-theme-darkGray text-[11px] font-[400]">
              itsmovietime.co@gmail.com
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
