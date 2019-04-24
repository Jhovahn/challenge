interface GiphyImagesObject {
  fixed_height_still: {
    url: string;
    width: string;
    height: string;
  };
  original_still: {
    url: string;
    width: string;
    height: string;
  };
  fixed_width: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  fixed_height_small_still: {
    url: string;
    width: string;
    height: string;
  };
  fixed_height_downsampled: {
    url: string;
    width: string;
    height: string;
    size: string;
    webp: string;
    webp_size: string;
  };
  preview: {
    width: string;
    height: string;
    mp4: string;
    mp4_size: string;
  };
  fixed_height_small: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  downsized_still: {
    url: string;
    width: string;
    height: string;
  };
  downsized: {
    url: string;
    width: string;
    height: string;
    size: string;
  };
  downsized_large: {
    url: string;
    width: string;
    height: string;
    size: string;
  };
  fixed_width_small_still: {
    url: string;
    width: string;
    height: string;
  };
  preview_webp: {
    url: string;
    width: string;
    height: string;
    size: string;
  };
  fixed_width_still: {
    url: string;
    width: string;
    height: string;
  };
  fixed_width_small: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  downsized_small: {
    width: string;
    height: string;
    mp4: string;
    mp4_size: string;
  };
  fixed_width_downsampled: {
    url: string;
    width: string;
    height: string;
    size: string;
    webp: string;
    webp_size: string;
  };
  downsized_medium: {
    url: string;
    width: string;
    height: string;
    size: string;
  };
  original: {
    url: string;
    width: string;
    height: string;
    size: string;
    frames: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  fixed_height: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  looping: {
    mp4: string;
    mp4_size: string;
  };
  original_mp4: {
    width: string;
    height: string;
    mp4: string;
    mp4_size: string;
  };
  preview_gif: {
    url: string;
    width: string;
    height: string;
    size: string;
  };
  '480w_still': {
    url: string;
    width: string;
    height: string;
  };
}

export interface GiphyGifObject {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string; // keep it G!
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: boolean;
  import_datetime: string;
  trending_datetime: string;
  images: GiphyImagesObject;
  title: string;
  _score: number;
  analytics: {
    onload: {
      url: string;
    };
    onclick: {
      url: string;
    };
    onsent: {
      url: string;
    };
  };
}
