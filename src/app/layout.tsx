import NavigationBar from '@/components/NavigationBar/NavigationBar';
import './globals.css';
import localFont from 'next/font/local';
import ModalPortal from '@/components/ModalPortal/ModalPortal';
import AccountModal from '@/components/AccountModal/AccountModal';
import RecoilRootContext from '@/context/RecoilRootContext';
import QueryClientContext from '@/context/QueryClientContext';

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
            <AccountModal />
            <NavigationBar />
            {children}
          </QueryClientContext>
        </RecoilRootContext>
      </body>
    </html>
  );
}
