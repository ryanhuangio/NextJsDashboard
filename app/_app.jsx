import { SessionProvider } from 'next-auth/react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}