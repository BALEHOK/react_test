import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object,
    loadChildren: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state= {
      showReplyArea: false
    }
  }

  toggleReply = () => this.setState({showReplyArea: !this.state.showReplyArea})

  render() {
    const comment = this.props.comment;

    return (
      <div>
        <div>
          <p>{`${comment.author} ${(new Date(comment.createdAt)).toLocaleString()}`}</p>
          <p>{comment.text}</p>
        </div>
        <div>
          <a onClick={this.props.loadChildren}>{comment.repliesCount} replies</a>
          &nbsp;
          <a onClick={this.toggleReply}>reply</a>
        </div>
        {this.state.showReplyArea ? (
          <div><textarea cols="30" rows="5"></textarea></div>
        ) : null}
      </div>
    );
  }
}

export default Comment;
