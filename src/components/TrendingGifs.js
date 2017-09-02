// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import TrendingGif from '../containers/TrendingGif';

type Props = {
  onEnter: () => void,
  gifIds: Array<string>,
  isLoading: boolean,
};

const Container = styled.div`
  flex: 1 0 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 50px;
`;

const GifContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  margin: 0.5vw;
`;

class TrendingGifs extends PureComponent<Props> {
  componentWillMount() {
    const { props } = this;
    props.onEnter();
  }

  render() {
    const { props } = this;

    if (props.isLoading) {
      return <Container>is loading</Container>;
    }

    return (
      <Container>
        {props.gifIds.map(id => (
          <GifContainer key={id}>
            <TrendingGif id={id} />
          </GifContainer>
        ))}
      </Container>
    );
  }
}

export default TrendingGifs;
