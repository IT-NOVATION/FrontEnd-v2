import GoogleBtn from '@/ui/buttons/GoogleBtn';
import KakaoBtn from '@/ui/buttons/KakaoBtn';
import NaverBtn from '@/ui/buttons/NaverBtn';

const socialBtns = [
  {
    type: 'google',
    button: <GoogleBtn />,
    name: '구글',
    url: 'https://api.its-movietime.com/oauth2/authorization/google',
  },
  {
    type: 'naver',
    button: <NaverBtn />,
    name: '네이버',
    url: 'https://api.its-movietime.com/oauth2/authorization/naver',
  },
  {
    type: 'kakao',
    button: <KakaoBtn />,
    name: '카카오',
    url: 'https://api.its-movietime.com/oauth2/authorization/kakao',
  },
];

export default function SocailLogin() {
  // TODO: a태그의 href에 서버 주소 연결 필요!
  return (
    <section className="flex flex-col items-center">
      <p className="mt-[15px] mb-[19px] text-body3">간편하게 SNS 로그인</p>
      <ul className="flex items-center justify-center gap-[70px]">
        {socialBtns.map(({ type, button, name, url }) => (
          <li key={type} className="flex flex-col gap-[10px] items-center">
            <a className="w-[55px] h-[55px]" href={url}>
              {button}
            </a>
            <p className="text-body1">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
