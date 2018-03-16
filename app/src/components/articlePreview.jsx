import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

class articleList extends Component {
  static propTypes = {
    article: PropTypes.object
  }

  render() {
    const {article} = this.props;

    if (!article) {
      return (<div className="article-preview"></div>);
    }

    const { title, imageUrl, text } = article;

    return (
      <div className="article">
        <h1>{title}</h1>
        <div className="article-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="article-body">
          {text}
        </div>
        <div className="article-comments">
          <h4>Comments</h4>
          <textarea cols="30" rows="5" defaultValue="Body of comment"></textarea>
          <ul>
            <li>
              <div>
                <p>rk 3 hours ago</p>
                <p>First comment</p>
              </div>
            </li>
            <li>
              <div>
                <p>rk 2 hours ago</p>
                <p>Second comment</p>
                <ul>
                  <li>
                    <div>
                      <p>rk 2 hours ago</p>
                      <p>Reply to second comment</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>rk 2 hours ago</p>
                      <p>Second reply to second comment</p>
                      <textarea cols="30" rows="5" defaultValue="Body of reply"></textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default articleList;
