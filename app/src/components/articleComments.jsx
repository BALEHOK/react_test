import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

import Comment from './comment';

class articleComments extends PureComponent {
  static propTypes = {
    comments: PropTypes.object
  }

  getCommentsVm() {
    const {comments} = this.props;
    if (!comments || !comments.orderedChildren.length) {
      return [];
    }

    let vm = [];
    comments.orderedChildren.forEach(id => vm.push(comments[id]));

    return vm;
  }

  render() {
    const comments = this.getCommentsVm();

    return (
      <div className="article-comments">
        <h4>Comments</h4>

        {!comments.length ? (
          <div>Be the first one to comment</div>
        ) : null}

        <textarea cols="30" rows="5"></textarea>

        {comments.length ? (
          <ul>
            {comments.map(c => (
              <li key={c.id}>
                <Comment comment={c} />
              </li>
            ))}
          </ul>
        ) : null}

      </div>
    );
  }
}

export default articleComments;
