// @flow

import * as giphyApi from '../../api/giphy';

import type { GifObject } from '../../types/gif-object';
import type { State } from './reducers';

export type InsertTrendingAction = {
  +type: 'INSERT_TRENDING',
  +trendingGifs: Array<GifObject>,
};
export type Action = InsertTrendingAction;

type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState?: GetState) => any; // eslint-disable-line no-use-before-define
type Dispatch = (action: Action | ThunkAction) => any;

export const getTrending = (): ThunkAction => async dispatch => {
  try {
    const response = await fetch(
      giphyApi.getTrending('735850dd359842089bfe0e37744e4d6d')
    );
    const json = await response.json();
    dispatch(insertTrending(json.data));
  } catch (e) {
    throw e;
  }
};

export const insertTrending = (
  trendingGifs: Array<GifObject>
): InsertTrendingAction => ({
  type: 'INSERT_TRENDING',
  trendingGifs,
});
