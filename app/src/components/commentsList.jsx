import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

import Comment from './comment.connect';

class CommentsList extends PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  render() {
    const {comments} = this.props;
    console.log(`rendering comment list for ${(comments[0] || {}).parentCommentId}`) // понять почему все сломалось - все листы ререндерятся!

    return (
      <ul>
        {comments.map(c => (
          <li key={c.id}>
            <Comment comment={c} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentsList;
