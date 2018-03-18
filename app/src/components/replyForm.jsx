import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Comment extends PureComponent {
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
      <div>
        <textarea cols="30" rows="5" value={text} onChange={this.onTextChange}></textarea>
        {text ? (
          <a onClick={this.addReply}>add reply</a>
        ) : null}
      </div>
    );
  }
}

export default Comment;
