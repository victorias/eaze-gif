// @flow

import * as giphyApi from '../../api/giphy';

import type { GifObject } from '../../types/gif-object';
import type { State } from './reducers';

export type InsertTrendingAction = {
  +type: 'INSERT_TRENDING',
  +trendingGifs: Array<GifObject>,
};
export type StartFetchAction = {
  +type: 'START_FETCH',
};
export type Action = InsertTrendingAction | StartFetchAction;

type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any; // eslint-disable-line no-use-before-define
type Dispatch = (action: Action | ThunkAction) => any;

export const getTrending = (): ThunkAction => async (dispatch, getState) => {
  dispatch();
  try {
    const response = await fetch(
      giphyApi.getTrending('735850dd359842089bfe0e37744e4d6d')
    );
    const json = await response.json();
    dispatch(insertTrending(json.data));
  } catch (e) {
    alert('error in getTrending');
    dispatch({
      type: 'ERROR',
      name: 'error',
    });
  }
};

export const insertTrending = (
  trendingGifs: Array<GifObject>
): InsertTrendingAction => ({
  type: 'INSERT_TRENDING',
  trendingGifs,
});

export const startFetch = (): StartFetchAction => ({
  type: 'START_FETCH',
});
