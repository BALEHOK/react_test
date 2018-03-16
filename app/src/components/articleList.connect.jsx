import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articleList';
import { articleSelected, loadArticles } from '../actions/creators';

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    selectedArticleId: state.articles.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadArticles,
    articleSelected
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
