// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Search from '../Search';

describe('Search', () => {
  it('renders', () => {
    const tree = renderer.create(
      <Search search={q => undefined} getTrending={() => undefined} />
    );
    expect(tree).toMatchSnapshot();
  });
});
