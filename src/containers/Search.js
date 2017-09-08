// @flow

import { connect } from 'react-redux';
import Search from '../components/Search';

import * as actions from '../redux/gifs/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(actions.search(query)),
  getTrending: () => dispatch(actions.getTrending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
