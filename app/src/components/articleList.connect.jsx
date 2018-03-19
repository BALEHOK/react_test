import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articleList';
import { loadArticles } from '../actions/creators';

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadArticles
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
