import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

import CommentsByParentList from './commentsListByParent.connect';

class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    commentMeta: PropTypes.object.isRequired,
    toggleExpand: PropTypes.func.isRequired,
    loadReplies: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showReplyArea: false
    }
  }

  toggleReplyArea = () => this.setState({ showReplyArea: !this.state.showReplyArea })

  loadReplies = () => {
    const { comment, commentMeta, loadReplies, toggleExpand } = this.props;
    if (comment.repliesCount === 0) {
      return;
    }

    if (!commentMeta.expanded) {
      loadReplies(comment);
    }

    toggleExpand(comment.id);
  }

  render() {
    const { comment, commentMeta } = this.props;

    return (
      <div>
        <div>
          <p>{`${comment.author} ${(new Date(comment.createdAt)).toLocaleString()}`}</p>
          <p>{comment.text}</p>
        </div>
        <div>
          <a onClick={this.loadReplies}>{comment.repliesCount} replies</a>
          &nbsp;
          <a onClick={this.toggleReplyArea}>reply</a>
        </div>

        {commentMeta.expanded ? (
          <CommentsByParentList parentMeta={commentMeta} />
        ) : null}

        {this.state.showReplyArea ? (
          <div><textarea cols="30" rows="5"></textarea></div>
        ) : null}
      </div>
    );
  }
}

export default Comment;
