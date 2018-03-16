import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articlePreview';
import { articleSelected, loadArticles } from '../actions/creators';

function mapStateToProps(state) {
  const {articles, selectedArticleId} = state;

  let selectedArticle;
  if (selectedArticleId === null || !articles.length) {
    selectedArticle = null;
  } else {
    selectedArticle = articles.find(a => a.id === selectedArticleId);
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
