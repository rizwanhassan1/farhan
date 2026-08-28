import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Farhan Computers',
  description: 'Your one-stop shop for buying and selling computers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}