import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articleTile';
import { articleSelected } from '../actions/creators';

function mapStateToProps(state, ownProps) {
  const articleId = ownProps.articleId;
  return {
    article: state.articles[articleId],
    articleMeta: state.articlesMeta[articleId],
    isSelected: state.selectedArticleId === articleId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSelect: articleSelected
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
