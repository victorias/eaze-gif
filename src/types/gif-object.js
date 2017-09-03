// @flow

export type FixedHeight = {
  url: string,
  width: string,
  height: string,
  size: string,
  mp4: string,
  mp4_size: string,
  webp: string,
  webp_size: string,
};

type FixedHeightDownsampled = {
  url: string,
  width: string,
  height: string,
  size: string,
  webp: string,
  webp_size: string,
};

export type FixedHeightStill = {
  url: string,
  width: string,
  height: string,
  size: string,
};

type Looping = {
  mp4: string,
  mp4_size: string,
};

export type Original = {
  url: string,
  width: string,
  height: string,
  size: string,
  frames: string,
  mp4: string,
  mp4_size: string,
  webp: string,
  webp_size: string,
  hash: string,
};

type OriginalMp4 = {
  mp4: string,
  mp4_size: string,
  width: string,
  height: string,
};

type Images = {
  fixed_height: FixedHeight,
  fixed_height_still: FixedHeightStill,
  fixed_height_downsampled: FixedHeightDownsampled,
  fixed_width: FixedHeight,
  fixed_width_still: FixedHeightStill,
  fixed_width_downsampled: FixedHeightDownsampled,
  fixed_height_small: FixedHeight,
  fixed_height_small_still: FixedHeightStill,
  fixed_width_small: FixedHeight,
  fixed_width_small_still: FixedHeightStill,
  downsized: FixedHeightStill,
  downsized_still: FixedHeightStill,
  downsized_large: FixedHeightStill,
  downsized_medium: FixedHeightStill,
  original: Original,
  original_still: FixedHeightStill,
  looping: Looping,
  original_mp4: OriginalMp4,
  preview: OriginalMp4,
  downsized_small: OriginalMp4,
  preview_gif: FixedHeightStill,
  preview_webp: FixedHeightStill,
};

export type GifObject = {
  type: string,
  id: string,
  slug: string,
  url: string,
  bitly_gif_url: string,
  bitly_url: string,
  embed_url: string,
  username: string,
  source: string,
  rating: string,
  content_url: string,
  source_tld: string,
  source_post_url: string,
  is_indexable: number,
  import_datetime: string,
  trending_datetime: string,
  images: Images,
};

type Meta = {
  status: number,
  msg: string,
  response_id: string,
};

type Pagination = {
  count: number,
  offset: number,
};

export type ApiResponse = {
  data: Array<GifObject>,
  pagination: Pagination,
  meta: Meta,
};
