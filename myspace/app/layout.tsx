import AuthProvider from './AuthProvider';
import './globals.css';
import NavMenu from './NavMenu';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className=''>
          <NavMenu />
          <main className='p-10 pt-0 h-[calc(100vh-70px)]'>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
