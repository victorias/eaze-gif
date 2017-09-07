// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import type {
  FixedHeight,
  FixedHeightStill,
  Original,
} from '../types/gif-object';

import Modal from './Modal';

type Props = {
  id: string,
  still: FixedHeightStill,
  preview: FixedHeight,
  original: Original,
};

type State = {
  isHovering: boolean,
  isModalOpen: boolean,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;

  &:hover {
    cursor: pointer;
  }
`;

const DetailRow = styled.div`
  display: flex;
  flex: 1 0 auto;
  margin-top: 10px;
  align-items: center;
`;

const DimensionLabel = styled.div`
  margin-right: auto;
  color: #ffffff;
`;

const Icon = styled(FontAwesome)`
  color: #ffffff;
  margin-left: 5px;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  height: auto;
  width: auto;
  object-fit: contain;
`;

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
          <Img
            src={props.preview.url}
            alt="preview gif"
            width={props.preview.width}
            height={props.preview.height}
          />
        ) : (
          <Img
            src={props.still.url}
            alt="still"
            width={props.still.width}
            height={props.still.height}
          />
        )}

        {state.isModalOpen && (
          <Modal
            isOpen={state.isModalOpen}
            onRequestClose={() => this.setState({ isModalOpen: false })}
          >
            <Img src={props.original.url} alt="original gif" />
            <DetailRow>
              <DimensionLabel>
                Dimensions: {props.original.width} x {props.original.height}px
              </DimensionLabel>
              <a href={props.original.mp4} download>
                <Icon name="download" alt="Download as MP4" />
              </a>
            </DetailRow>
          </Modal>
        )}
      </Container>
    );
  }
}

export default TrendingGif;
