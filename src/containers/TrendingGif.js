// @flow

import { connect } from 'react-redux';
import TrendingGif from '../components/TrendingGif';

import * as selectors from '../redux/gifs/selectors';

const mapStateToProps = (state, props) => ({
  still: selectors.getPreviewStillFromId(props.id)(state),
  preview: selectors.getPreviewGifFromId(props.id)(state),
  original: selectors.getOriginalGifFromId(props.id)(state),
});

export default connect(mapStateToProps)(TrendingGif);
