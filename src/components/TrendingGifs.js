// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
  onEnter: () => void,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class TrendingGifs extends PureComponent<Props> {
  componentWillMount() {
    const { props } = this;
    props.onEnter();
  }

  render() {
    return <Container>mounter</Container>;
  }
}

export default TrendingGifs;
