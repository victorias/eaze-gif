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

export const getTrendingGifObjList = (state: RootStore) =>
  state.gifs.trendingGifs;

export const getGifFromId = (id: string) =>
  createSelector(
    getTrendingGifObjList,
    gifList => gifList.filter(gif => gif.id === id)[0]
  );

export const getPreviewStillFromId = (id: string) =>
  createSelector(getGifFromId(id), gifObj => gifObj.images.fixed_height_still);

export const getPreviewGifFromId = (id: string) =>
  createSelector(getGifFromId(id), gifObj => gifObj.images.fixed_height);

export const getOriginalGifFromId = (id: string) =>
  createSelector(getGifFromId(id), gifObj => gifObj.images.original);
