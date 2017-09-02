// @flow

import type { GifObject } from '../../types/gif-object';

import type { Action, InsertTrendingAction } from './actions';

export type State = {
  +trendingGifs: Array<GifObject>,
  +loading: boolean,
};

const initialState = {
  trendingGifs: [],
  loading: true,
};

const insertTrending = (state: State, action: InsertTrendingAction) => {
  return {
    ...state,
    trendingGifs: [...state.trendingGifs, ...action.trendingGifs],
    loading: false,
  };
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'INSERT_TRENDING':
      return insertTrending(state, action);
    default:
      return state;
  }
};
