import { Metadata } from 'next';
import VideoDownloader from '@/components/VideoDownloader';
import { History } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Story Downloader - Save TikTok Stories',
  description: 'Download TikTok stories easily. Save TikTok story videos in high quality for free.',
};

export default function Story() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <History className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            TikTok Story Downloader
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Download TikTok stories quickly and easily. Save your favorite stories before they disappear.
          </p>
        </div>

        <VideoDownloader />

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-4 border border-gray-100 rounded-lg">
              <h3 className="font-medium mb-2">High Quality</h3>
              <p className="text-gray-600">Download stories in the best available quality</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <h3 className="font-medium mb-2">Fast Download</h3>
              <p className="text-gray-600">Quick processing and download speeds</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <h3 className="font-medium mb-2">No Registration</h3>
              <p className="text-gray-600">No account needed to download stories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}