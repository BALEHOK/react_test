import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articlePreview';
import { articleSelected, loadArticles } from '../actions/creators';

function mapStateToProps(state) {
  const articles = state.articles;

  let selectedArticle;
  if (articles.selected === null || !articles.articles.length) {
    selectedArticle = null;
  } else {
    selectedArticle = articles.articles.find(a => a.id === articles.selected);
  }

  return {
    article: selectedArticle
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadArticles,
    articleSelected
  }, dispatch);
}

export default connect(mapStateToProps)(Component);
