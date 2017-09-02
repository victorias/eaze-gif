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

export const getTrendingStillFromId = (id: string) =>
  createSelector(
    getGifObjFromId(id),
    gifObj => gifObj.images.fixed_height_still.url
  );

export const getTrendingGifFromId = (id: string) =>
  createSelector(getGifObjFromId(id), gifObj => gifObj.images.fixed_height.url);

export const getOriginalGifFromId = (id: string) =>
  createSelector(getGifObjFromId(id), gifObj => gifObj.images.original.url);
