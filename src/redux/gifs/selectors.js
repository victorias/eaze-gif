// @flow

import { createSelector } from 'reselect';
import type { State } from './reducers';

type RootStore = {
  gifs: State,
};

export const isLoading = (state: RootStore) => state.gifs.loading;

export const getTrendingList = (state: RootStore) => {
  return state.gifs.trendingGifs.map(gif => {
    return gif.id;
  });
};

export const getGifObjFromId = (id: string) => (state: RootStore) => {
  return state.gifs.trendingGifs.filter(gif => gif.id === id)[0];
};

export const getTrendingImgFromId = (id: string) =>
  createSelector(
    getGifObjFromId(id),
    gifObj => gifObj.images.fixed_height_still.url
  );
