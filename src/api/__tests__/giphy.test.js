// @flow

import * as giphyApi from '../giphy';

describe('giphy api tests', () => {
  it('.getTrending', () => {
    expect(giphyApi.getTrending('apiKey')).toMatchSnapshot();
    expect(giphyApi.getTrending('apiKey', 10)).toMatchSnapshot();
  });
});
