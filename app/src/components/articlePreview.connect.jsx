import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articlePreview';
import { addComment } from '../actions/creators';

function mapStateToProps(state) {
  const { articles, articlesMeta, selectedArticleId } = state;

  let selectedArticle, articleMeta;
  if (selectedArticleId === null) {
    selectedArticle = null;
  } else {
    selectedArticle = articles[selectedArticleId];
    articleMeta = articlesMeta[selectedArticleId];
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
