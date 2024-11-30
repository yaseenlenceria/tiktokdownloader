import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'DownloadsFromTikTok - Download TikTok Videos Without Watermark',
    template: '%s | DownloadsFromTikTok',
  },
  description: 'Free online TikTok video downloader. Download TikTok videos without watermark in HD quality. Fast, simple, and secure.',
  keywords: ['tiktok downloader', 'video downloader', 'tiktok video download', 'download tiktok'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}