// @flow

import { connect } from 'react-redux';

import TrendingGifs from '../components/TrendingGifs';
import * as actions from '../redux/gifs/actions';
import * as selectors from '../redux/gifs/selectors';

const mapStateToProps = state => ({
  gifIds: selectors.getTrendingList(state),
  isLoading: selectors.isLoading(state),
});

const mapDispatchToProps = {
  onEnter: actions.getTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingGifs);
