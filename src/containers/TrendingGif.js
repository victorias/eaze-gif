// @flow

import { connect } from 'react-redux';
import TrendingGif from '../components/TrendingGif';

import * as selectors from '../redux/gifs/selectors';

const mapStateToProps = (state, props) => ({
  stillUrl: selectors.getTrendingStillFromId(props.id)(state),
  url: selectors.getTrendingGifFromId(props.id)(state),
});

export default connect(mapStateToProps)(TrendingGif);
