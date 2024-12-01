'use client';

import { useState } from 'react';
import { analyzeTikTokVideo, type TikTokResponse } from '@/lib/api';
import { Loader2, Download, Link2, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function VideoDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TikTokResponse['data'] | null>(null);
  const [error, setError] = useState('');

  const handleUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
    
    if (value.includes('tiktok.com')) {
      try {
        setLoading(true);
        setError('');
        const data = await analyzeTikTokVideo(value);
        if (data.code === 0 && data.data) {
          setResult(data.data);
        } else {
          throw new Error(data.msg || 'Failed to analyze video');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to analyze video. Please try again.');
        setResult(null);
      } finally {
        setLoading(false);
      }
    } else {
      setResult(null);
    }
  };

  const handleDownload = async (videoUrl: string, watermark: boolean = false) => {
    try {
      const response = await fetch(videoUrl);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `tiktok-video${watermark ? '-with-watermark' : ''}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      setError('Failed to download video. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Link2 className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            value={url}
            onChange={handleUrlChange}
            placeholder="Paste TikTok video URL here..."
            className="w-full pl-10 pr-10 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          {loading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Loader2 className="animate-spin h-5 w-5 text-blue-500" />
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-xl flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="aspect-video relative bg-gray-100">
              {result.cover && (
                <div className="relative w-full h-full">
                  <Image
                    src={result.cover}
                    alt={result.title || 'TikTok video thumbnail'}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              )}
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold line-clamp-2">{result.title}</h2>
              {result.author && (
                <div className="flex items-center space-x-4">
                  {result.author.avatar && (
                    <div className="relative w-10 h-10">
                      <Image
                        src={result.author.avatar}
                        alt={result.author.nickname || 'Author avatar'}
                        width={40}
                        height={40}
                        className="rounded-full border border-gray-200"
                        unoptimized
                      />
                    </div>
                  )}
                  <span className="font-medium text-gray-700">{result.author.nickname}</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleDownload(result.play)}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Without Watermark
                </button>
                <button
                  onClick={() => handleDownload(result.wmplay, true)}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download With Watermark
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}