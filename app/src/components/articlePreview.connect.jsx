import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articlePreview';
import { addComment } from '../actions/creators';

function mapStateToProps(state) {
  const { articles, selectedArticleId } = state;

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
    articleMeta,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addComment
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
