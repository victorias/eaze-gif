// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import TrendingGifs from '../TrendingGifs';

describe('TrendingGifs', () => {
  it('renders loading', () => {
    const tree = renderer.create(
      <TrendingGifs isLoading gifIds={[]} onEnter={() => undefined} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders an empty gif list', () => {
    const tree = renderer.create(
      <TrendingGifs isLoading={false} gifIds={[]} onEnter={() => undefined} />
    );
    expect(tree).toMatchSnapshot();
  });
});
