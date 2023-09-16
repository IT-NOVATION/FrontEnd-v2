## 사용 기술
HTML/CSS, Typescript, Next.js, React, TanStackQuery, Tailwind-css, React-Hook-Form, Recoil, Vercel

## 개선 사항
- Next/Image 활용하여 이미지 최적화 -> 기존에 7MB로 로딩되던 이미지가 90KB 용량의 webp 포맷으로 로딩 -> FCP 단축
- Lighthouse 측정: 성능 76점->100점, SEO 91점->100점
- generateMetadata 를 활용하여 dynamic routing 되는 페이지들에 맞는 메타태그 동적으로 생성
- MetadataRoute를 사용해 dynamic routing 되는 페이지들을 포함 시킨 sitemap.xml 생성
- 리뷰작성 시 하나의 form에서 입력 받아야 하는 값들이 많았는데, react-hook-form 의 form provider를 활용하여 props drilling 최소화
- access token 만료시, 401 응답 가로채서 refresh token 활용해 access token 재발급 받는 로직을 axios 없이 fetch api만 사용하여 직접 구현
