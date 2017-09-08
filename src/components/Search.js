// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
  search: (query: string) => void,
  getTrending: () => void,
};

type State = {
  query: string,
};

const Input = styled.input`
  display: flex;
  outline: none;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding-bottom: 14px;
  color: #1b395d;
  -webkit-text-fill-color: #1b395d;
  letter-spacing: 0.5px;
  background: transparent;
  border-radius: 0px;
  font-size: 40px;
  border-bottom: 1px solid rgba(27, 57, 93, 0.3);
  font-family: 'Roboto';
`;

class Search extends PureComponent<Props, State> {
  state = { query: 'trending' };

  render() {
    const { props, state } = this;
    return (
      <Input
        type="text"
        value={state.query}
        onChange={event => this.setState({ query: event.target.value })}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            if (state.query === 'trending') {
              props.getTrending();
            } else {
              props.search(state.query);
            }
          }
        }}
      />
    );
  }
}

export default Search;
