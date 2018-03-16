import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

import NestedComment from './comment.connect';

class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    replies: PropTypes.array,
    loadReplies: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state= {
      showReplyArea: false
    }
  }

  toggleReplyArea = () => this.setState({showReplyArea: !this.state.showReplyArea})

  loadReplies = () => {
    const {comment, loadReplies} = this.props;
    if (comment.repliesCount === 0){
      return;
    }

    loadReplies(comment);
  }

  render() {
    const {comment, replies} = this.props;

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

        {/* {comment.expanded ? replies.map(r => (
          <NestedComment comment={r} />
        )) : null} */}

        {this.state.showReplyArea ? (
          <div><textarea cols="30" rows="5"></textarea></div>
        ) : null}
      </div>
    );
  }
}

export default Comment;
