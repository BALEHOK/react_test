import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

import CommentById from './commentById.connect';

class CommentsList extends PureComponent {
  static propTypes = {
    commentIds: PropTypes.array.isRequired
  }

  render() {
    const {commentIds} = this.props;

    return (
      <ul>
        {commentIds.map(id => (
          <li key={id}>
            <CommentById commentId={id} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentsList;
