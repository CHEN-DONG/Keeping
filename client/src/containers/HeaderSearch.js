import { connect } from 'react-redux';
import { headerSearch } from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => ({
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  changeValue: value => dispatch(headerSearch(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
