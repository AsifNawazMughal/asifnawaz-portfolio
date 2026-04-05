import Header from '@/Components/Header/Header';
import PageLoader from '@/Components/Ui/PageLoader';
import '../Styles/globals.css';

import { DM_Sans, Syne } from 'next/font/google';
import Footer from '@/Components/Footer/Footer';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Asif Nawaz — React & Next.js Developer',
  description: 'Full-stack web developer, ex-game developer, and CS lecturer from Pakistan. Specializing in React, Next.js, and MERN stack.',
  icons: {
    icon: '/logo.png',
  },
};

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: 'swap',
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body data-scroll-behavior="smooth"
        className={`${dmSans.variable} ${syne.variable} antialiased font-sans text-primary-foreground bg-primary-background `}
        suppressHydrationWarning={true} // Uncomment if hydration error persists (after checking browser extensions)
      >
          <PageLoader />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}