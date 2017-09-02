// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string,
  url: string,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
`;

const Gif = (props: Props) => (
  <Container>
    <img src={props.url} alt="gif" />
  </Container>
);

export default Gif;
