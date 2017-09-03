// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

type Props = {
  id: string,
  stillUrl: string,
  previewUrl: string,
  originalUrl: string,
};

type State = {
  isHovering: boolean,
  isModalOpen: boolean,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
`;

const Img = styled.img`flex: 0 1 auto;`;

class TrendingGif extends PureComponent<Props, State> {
  state = {
    isHovering: false,
    isModalOpen: false,
  };

  onMouseOver = () => {
    this.setState({
      isHovering: true,
    });
  };

  onMouseOut = () => {
    this.setState({
      isHovering: false,
    });
  };

  render() {
    const { props, state } = this;
    return (
      <Container
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={() => {
          this.setState({ isModalOpen: true });
        }}
      >
        {state.isHovering ? (
          <Img src={props.previewUrl} alt="gif" />
        ) : (
          <Img src={props.stillUrl} alt="still gif" />
        )}

        {state.isModalOpen && (
          <Modal
            isOpen={state.isModalOpen}
            onRequestClose={() => this.setState({ isModalOpen: false })}
          >
            <Img src={props.originalUrl} alt="original gif" />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TrendingGif;
