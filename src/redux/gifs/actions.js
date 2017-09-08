// @flow

import * as giphyApi from '../../api/giphy';

import type { GifObject } from '../../types/gif-object';
import type { State } from './reducers';

export type InsertAction = {
  +type: 'INSERT',
  +gifs: Array<GifObject>,
};
export type Action = InsertAction;

type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState?: GetState) => any; // eslint-disable-line no-use-before-define
export type Dispatch = (action: Action | ThunkAction) => any;

const API_KEY = '735850dd359842089bfe0e37744e4d6d';

export const getTrending = (): ThunkAction => async dispatch => {
  try {
    const response = await fetch(giphyApi.getTrending(API_KEY));
    const json = await response.json();
    dispatch(insert(json.data));
  } catch (e) {
    throw e;
  }
};

export const search = (query: string): ThunkAction => async dispatch => {
  try {
    const response = await fetch(giphyApi.search(API_KEY, query));
    const json = await response.json();
    dispatch(insert(json.data));
  } catch (e) {
    throw e;
  }
};

export const insert = (gifs: Array<GifObject>): InsertAction => ({
  type: 'INSERT',
  gifs,
});
