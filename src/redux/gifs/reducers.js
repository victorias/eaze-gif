// @flow

import type { GifObject } from '../../types/gif-object';

import type { Action, InsertAction } from './actions';

export type State = {
  +gifs: Array<GifObject>,
  +loading: boolean,
};

const initialState = {
  gifs: [],
  loading: true,
};

const insert = (state: State, action: InsertAction) => {
  return {
    ...state,
    gifs: action.gifs,
    loading: false,
  };
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'INSERT':
      return insert(state, action);
    default:
      return state;
  }
};
