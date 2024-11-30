import axios from 'axios';

const RAPID_API_KEY = 'fb434b9b45mshfc6181a8b24e3dcp10e9dcjsn29d4e6bd1d10';
const RAPID_API_HOST = 'tiktok-download-without-watermark.p.rapidapi.com';

export interface TikTokResponse {
  code: number;
  msg: string;
  processed_time: number;
  data: {
    aweme_id: string;
    id: string;
    region: string;
    title: string;
    cover: string;
    origin_cover: string;
    duration: number;
    play: string;
    wmplay: string;
    size: number;
    wm_size: number;
    music: string;
    music_info: {
      id: string;
      title: string;
      play: string;
      author: string;
      original: boolean;
      duration: number;
    };
    play_count: number;
    digg_count: number;
    comment_count: number;
    share_count: number;
    download_count: number;
    author: {
      id: string;
      unique_id: string;
      nickname: string;
      avatar: string;
    };
  };
}

export async function analyzeTikTokVideo(url: string): Promise<TikTokResponse> {
  try {
    const encodedUrl = encodeURIComponent(url);
    const response = await axios.get('https://tiktok-download-without-watermark.p.rapidapi.com/analysis', {
      params: { url: encodedUrl, hd: '1' },
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST,
      },
      timeout: 10000, // 10 second timeout
    });

    if (response.data.code !== 0) {
      throw new Error(response.data.msg || 'Failed to analyze video');
    }

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.data.msg || 'Unknown error'}`);
    } else if (error.request) {
      throw new Error('Network error: Failed to reach the server');
    }
    throw error;
  }
}