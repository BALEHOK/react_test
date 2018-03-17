import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

import CommentsByParentList from './commentsListByParent.connect';

class articleComments extends PureComponent {
  static propTypes = {
    article: PropTypes.object.isRequired,
    articleMeta: PropTypes.object.isRequired
  }

  render() {
    const p = this.props;
    const hasComments = p.article.commentsCount !== 0;

    return (
      <div className="article-comments">
        <h4>Comments</h4>

        {!hasComments ? (
          <div>Be the first one to comment</div>
        ) : null}

        <textarea cols="30" rows="5"></textarea>

        {hasComments ? (
          <CommentsByParentList parentMeta={p.articleMeta} />
        ) : null}

      </div>
    );
  }
}

export default articleComments;
