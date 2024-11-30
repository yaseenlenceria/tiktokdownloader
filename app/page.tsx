import VideoDownloader from '@/components/VideoDownloader';
import { Metadata } from 'next';
import { Download, Share2, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader - Download TikTok Videos Without Watermark',
  description: 'Free online TikTok video downloader. Download TikTok videos without watermark in HD quality. Fast, simple, and secure.',
  keywords: 'tiktok downloader, tiktok video download, download tiktok without watermark, tiktok video downloader',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            TikTok Video Downloader
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Download TikTok videos without watermark in HD quality. Fast, simple, and secure.
          </p>
        </div>

        <VideoDownloader />

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Video className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium">High Quality Videos</h3>
            <p className="mt-2 text-gray-500">
              Download videos in the highest available quality
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Download className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium">No Watermark</h3>
            <p className="mt-2 text-gray-500">
              Get clean videos without TikTok watermark
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Share2 className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Easy Sharing</h3>
            <p className="mt-2 text-gray-500">
              Download and share videos instantly
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}