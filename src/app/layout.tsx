import NavigationBar from '@/components/NavigationBar/NavigationBar';
import './globals.css';
import localFont from 'next/font/local';
import AccountModal from '@/components/AccountModal/AccountModal';
import RecoilRootContext from '@/context/RecoilRootContext';
import QueryClientContext from '@/context/QueryClientContext';
import CookieProviderContext from '@/context/CookieProviderContext';

const pretendard = localFont({
  src: './PretendardVariable.woff2',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const BASE_URL = 'https://its-movietime.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: '홈',
        description: '나만의 영화를 기록하는 시간',
        url: `${BASE_URL}`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: '무비서치',
        description: '잊고있던 인생영화를 찾아보세요',
        url: `${BASE_URL}/movie-search`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: '무비토크',
        description: '더 많은 이야기를 쓰고 만나보세요',
        url: `${BASE_URL}/movie-talk`,
      },
    ],
  };
  return (
    <html lang="en" className={pretendard.className}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body>
        <RecoilRootContext>
          <QueryClientContext>
            <CookieProviderContext>
              <NavigationBar />
              <AccountModal />
              {children}
            </CookieProviderContext>
          </QueryClientContext>
        </RecoilRootContext>
        <div id="portal" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
