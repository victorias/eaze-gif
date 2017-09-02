// @flow

import { connect } from 'react-redux';

import TrendingGifs from '../components/TrendingGifs';
import * as actions from '../redux/gifs/actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onEnter: actions.getTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingGifs);
