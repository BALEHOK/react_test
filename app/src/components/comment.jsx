import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CommentsList from './commentsList';
import ReplyForm from './replyForm';

class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    commentMeta: PropTypes.object.isRequired,
    toggleExpand: PropTypes.func.isRequired,
    loadReplies: PropTypes.func.isRequired,
    addReply: PropTypes.func.isRequired,
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
    if (commentMeta.commentsCount === 0) {
      return;
    }

    // state is going to be toggled, load comments
    if (!commentMeta.expanded) {
      loadReplies(comment);
    }

    toggleExpand(comment.id);
  }

  addReply = (text) => {
    const { comment, toggleExpand, addReply } = this.props;
    this.toggleReplyArea();
    addReply(comment.articleId, comment.id, text);
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
          <a onClick={this.loadReplies}>{commentMeta.commentsCount} replies</a>
          &nbsp;
          <a onClick={this.toggleReplyArea}>reply</a>
        </div>

        {commentMeta.expanded ? (
          <CommentsList commentIds={commentMeta.children} />
        ) : null}

        {this.state.showReplyArea ? (
          <ReplyForm addReply={this.addReply} />
        ) : null}
      </div>
    );
  }
}

export default Comment;
