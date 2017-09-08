// @flow

import * as giphyApi from '../giphy';

describe('giphy api tests', () => {
  it('.getTrending', () => {
    expect(giphyApi.getTrending('apiKey')).toMatchSnapshot();
    expect(giphyApi.getTrending('apiKey', 10)).toMatchSnapshot();
  });

  it('.search', () => {
    expect(giphyApi.search('apiKey', 'q')).toMatchSnapshot();
    expect(giphyApi.search('apiKey', 'q', 10)).toMatchSnapshot();
  });
});
