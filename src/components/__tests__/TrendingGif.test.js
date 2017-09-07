// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import TrendingGif from '../TrendingGif';

describe('TrendingGif', () => {
  const baseGif = {
    url: 'gif-url',
    width: '100',
    height: '100',
    size: '100',
  };

  const fixedHeight = {
    ...baseGif,
    mp4: 'mp4',
    mp4_size: 'mp4_size',
    webp: 'webp',
    webp_size: 'webp_size',
  };

  const original = {
    ...fixedHeight,
    frames: '100',
    hash: 'hash',
  };

  it('renders', () => {
    const tree = renderer.create(
      <TrendingGif
        id=""
        original={original}
        still={baseGif}
        preview={fixedHeight}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
