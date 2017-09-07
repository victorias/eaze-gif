// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Modal from '../Modal';

describe('Modal', () => {
  it('renders when open', () => {
    const tree = renderer.create(
      <Modal isOpen onRequestClose={() => undefined} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders when closed', () => {
    const tree = renderer.create(
      <Modal isOpen={false} onRequestClose={() => undefined} />
    );
    expect(tree).toMatchSnapshot();
  });
});
