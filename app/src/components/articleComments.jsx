import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CommentsList from './commentsList';
import ReplyForm from './replyForm';

class ArticleComments extends PureComponent {
  static propTypes = {
    article: PropTypes.object.isRequired,
    articleMeta: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
  }

  addReply = (text) => {
    const {article: { id }, addComment} = this.props;

    addComment(id, null, text);
  };

  render() {
    const p = this.props;
    const hasComments = p.article.commentsCount !== 0;

    return (
      <div className="article-comments">
        <h4>Comments</h4>

        {!hasComments ? (
          <div>Be the first one to comment</div>
        ) : null}

        <ReplyForm addReply={this.addReply} />

        {hasComments ? (
          <CommentsList commentIds={p.articleMeta.children} />
        ) : null}

      </div>
    );
  }
}

export default ArticleComments;
