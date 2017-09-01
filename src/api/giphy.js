// @flow

export const getTrending = (apiKey: string, offset?: number = 0) => {
  return `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=G&offset=${offset}`;
};
