import { Metadata } from 'next';
import VideoDownloader from '@/components/VideoDownloader';
import { Image } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Thumbnail Downloader - Save TikTok Video Covers',
  description: 'Download TikTok video thumbnails and cover images in high quality. Save TikTok video covers easily.',
};

export default function Thumbnail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            TikTok Thumbnail Downloader
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Download TikTok video thumbnails and cover images in high quality. Perfect for content creators and designers.
          </p>
        </div>

        <VideoDownloader />

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Thumbnail Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-medium mb-3">High Resolution</h3>
              <p className="text-gray-600">Download thumbnails in their original high resolution</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-medium mb-3">Multiple Formats</h3>
              <p className="text-gray-600">Save thumbnails in different image formats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}