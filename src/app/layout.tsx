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
  return (
    <html lang="en" className={pretendard.className}>
      <body>
        <RecoilRootContext>
          <QueryClientContext>
            <CookieProviderContext>
              <AccountModal />
              <NavigationBar />
              {children}
            </CookieProviderContext>
          </QueryClientContext>
        </RecoilRootContext>
      </body>
    </html>
  );
}
