// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
  id: string,
  stillUrl: string,
  url: string,
};

type State = {
  isHovering: boolean,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
`;

const Img = styled.img`flex: 0 0 auto;`;

class TrendingGif extends PureComponent<Props, State> {
  state = {
    isHovering: false,
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
      <Container onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {state.isHovering ? (
          <Img src={props.url} alt="gif" />
        ) : (
          <Img src={props.stillUrl} alt="still gif" />
        )}
      </Container>
    );
  }
}

export default TrendingGif;
