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
  padding-left: 10vw;
  padding-right: 10vw;

  ${props =>
    props.isLoading &&
    `background-image: url('http://bestanimations.com/Science/Gears/loadinggears/loading-gear.gif');
    background-repeat: no-repeat;
    background-position: center center;`};
`;

const GifContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  margin: 0.5vw;

  @media (max-width: 480px) {
    margin: 0.5vw auto;
  }
`;

class TrendingGifs extends PureComponent<Props> {
  componentWillMount() {
    const { props } = this;
    props.onEnter();
  }

  render() {
    const { props } = this;

    if (props.isLoading || props.gifIds.length === 0) {
      return <Container isLoading={true} />;
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
