// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import Search from './containers/Search';
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
        <Header>
          #<Search /> on giphy
        </Header>
        <TrendingGifs />
      </Container>
    );
  }
}

export default App;
