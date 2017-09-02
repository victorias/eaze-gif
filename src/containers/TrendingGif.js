// @flow

import { connect } from 'react-redux';
import Gif from '../components/Gif';

import * as selectors from '../redux/gifs/selectors';

const mapStateToProps = (state, props) => ({
  url: selectors.getTrendingImgFromId(props.id)(state),
});

export default connect(mapStateToProps)(Gif);
