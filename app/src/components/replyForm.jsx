import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './replyForm.css'

class ReplyForm extends PureComponent {
  static propTypes = {
    addReply: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  onTextChange = (e) => this.setState({text: e.target.value});

  addReply = () => {
    this.props.addReply(this.state.text);

    this.setState({text: ''});
  }

  render() {
    const { text } = this.state;

    return (
      <div className="reply-form">
        <textarea rows="5" value={text} onChange={this.onTextChange} placeholder="comment text"></textarea>
        {text ? (
          <a onClick={this.addReply}>add reply</a>
        ) : null}
      </div>
    );
  }
}

export default ReplyForm;
