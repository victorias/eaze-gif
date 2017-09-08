// @flow

export const getTrending = (apiKey: string, offset?: number = 0) => {
  return `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=G&offset=${offset}`;
};

export const search = (apiKey: string, query: string, offset?: number = 0) => {
  return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`;
};
