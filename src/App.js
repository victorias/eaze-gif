// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import TrendingGifs from './containers/TrendingGifs';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 5vh 10vw;
  font-size: 40px;
`;

class App extends Component<{}, void> {
  render() {
    return (
      <Container>
        <Header>#trending on giphy</Header>
        <TrendingGifs />
      </Container>
    );
  }
}

export default App;
