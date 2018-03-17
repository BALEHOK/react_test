import { connect } from 'react-redux';
import Component from './articlePreview';

function mapStateToProps(state) {
  const {articles, selectedArticleId} = state;

  let selectedArticle, articleMeta;
  if (selectedArticleId === null || !articles.length) {
    selectedArticle = null;
  } else {
    selectedArticle = articles.find(a => a.id === selectedArticleId);
    articleMeta = state.articlesMeta[selectedArticleId] || {
      children: []
    };
  }

  return {
    article: selectedArticle,
    articleMeta
  };
}

export default connect(mapStateToProps)(Component);
