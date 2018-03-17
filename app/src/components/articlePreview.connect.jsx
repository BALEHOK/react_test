import { connect } from 'react-redux';
import Component from './articlePreview';

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

export default connect(mapStateToProps)(Component);
