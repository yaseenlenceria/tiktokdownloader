import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - TikTok Video Downloader',
  description: 'Learn about our mission to provide the best TikTok video downloading experience. Fast, secure, and user-friendly.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12">About Us</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          We are dedicated to providing the best TikTok video downloading experience, making it easy for users to save and share their favorite content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to make TikTok content more accessible while respecting creators' rights and maintaining high quality standards. We strive to provide a reliable, fast, and user-friendly service that helps users download their favorite TikTok videos easily.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>High-quality downloads without watermarks</li>
          <li>Fast and reliable service</li>
          <li>User-friendly interface</li>
          <li>No registration required</li>
          <li>Free to use</li>
          <li>Secure and safe downloads</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Technology</h2>
        <p className="text-gray-600 mb-6">
          We use cutting-edge technology to ensure the best possible video quality and fastest download speeds. Our service is built with modern web technologies and is constantly updated to maintain compatibility with TikTok's platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or suggestions? We'd love to hear from you. Contact our support team for assistance with any issues or feedback you may have.
        </p>
      </div>
    </div>
  );
}