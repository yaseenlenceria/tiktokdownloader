import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - DownloadsFromTikTok',
  description: 'Terms of service for DownloadsFromTikTok. Read our terms and conditions for using our TikTok video downloader service.',
};

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using DownloadsFromTikTok, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Service Description</h2>
          <p className="text-gray-600">
            DownloadsFromTikTok provides a service for downloading TikTok videos. We do not host any videos; we merely facilitate the downloading of publicly available content from TikTok.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
          <p className="text-gray-600">
            Users must:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Respect copyright and intellectual property rights</li>
            <li>Only download videos for personal, non-commercial use</li>
            <li>Not use our service for any illegal purposes</li>
            <li>Not attempt to manipulate or abuse our service</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p className="text-gray-600">
            Users are responsible for ensuring they have the right to download and use any content obtained through our service. We respect intellectual property rights and expect users to do the same.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Disclaimer of Warranties</h2>
          <p className="text-gray-600">
            Our service is provided "as is" without any warranties. We do not guarantee uninterrupted or error-free service operation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p className="text-gray-600">
            DownloadsFromTikTok shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these terms at any time. Continued use of our service after changes constitutes acceptance of the modified terms.
          </p>
        </section>
      </div>
    </div>
  );
}