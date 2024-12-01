import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - TikTok Video Downloader',
  description: 'Frequently asked questions about downloading TikTok videos without watermark. Learn how to use our TikTok downloader effectively.',
};

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">How do I download a TikTok video?</h2>
          <p className="text-gray-600">
            1. Copy the video link from TikTok app or website<br />
            2. Paste the link in our downloader<br />
            3. Choose your preferred version (with or without watermark)<br />
            4. Click the download button
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Is it free to use?</h2>
          <p className="text-gray-600">
            Yes, our TikTok video downloader is completely free to use with no hidden charges.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">What is the maximum video quality?</h2>
          <p className="text-gray-600">
            We provide the highest quality available from the original video, typically up to 1080p HD.
          </p>
        </div>
        

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Is it legal to download TikTok videos?</h2>
          <p className="text-gray-600">
            Downloading videos for personal use is generally acceptable. However, please respect copyright laws and creators' rights when sharing or using downloaded content.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Why isn't the download working?</h2>
          <p className="text-gray-600">
            Common issues include:<br />
            - Invalid or expired video link<br />
            - Private video<br />
            - Server maintenance<br />
            Try refreshing the page or checking if the video is publicly available.
          </p>
          
        </div>
      </div>
    </div>
  );
}