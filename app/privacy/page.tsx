import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - DownloadsFromTikTok',
  description: 'Privacy policy for DownloadsFromTikTok. Learn how we protect your privacy and handle your data.',
};

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect minimal information necessary to provide our service. This includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>TikTok video URLs that you submit for downloading</li>
            <li>Basic usage analytics to improve our service</li>
            <li>Technical information such as browser type and device information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the collected information solely for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Processing your video download requests</li>
            <li>Improving our service quality</li>
            <li>Maintaining and optimizing our website performance</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
          <p className="text-gray-600">
            We use TikTok's API and other third-party services to provide our functionality. These services may collect information as specified in their respective privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us through our support channels.
          </p>
        </section>
      </div>
    </div>
  );
}