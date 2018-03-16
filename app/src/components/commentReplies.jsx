import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

class CommentReplies extends PureComponent {
  static propTypes = {
    comments: PropTypes.object
  }

  getCommentsVm() {
    const { comments } = this.props;
    if (!comments || !comments.orderedChildren.length) {
      return [];
    }

    let vm = [];
    comments.orderedChildren.forEach(id => vm.push(comments[id]));

    return vm;
  }

  toggleReplyArea = () => this.setState({ showReplyArea: !this.state.showReplyArea })

  loadReplies = () => {
    if (comment.repliesCount === 0) {
      return;
    }

    const { comment, loadReplies } = this.props;
    loadReplies(comment);
  }

  render() {
    const comments = this.getCommentsVm();

    if (!comments.length) {
      return null;
    }

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
}

export default CommentReplies;
