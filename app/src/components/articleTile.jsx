
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articleTile.css';

class articleList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  }

  render() {
    const {title, imageUrl, text, commentsCount} = this.props.article;
    return (
      <div className="article-tile">
        <div className="article-tile-image">
          <img src={imageUrl} />
        </div>
        <div className="article-tile-info">
          <h3>{title}</h3>
          <p>{text}</p>
          <span>{commentsCount} comment(s)</span>
        </div>
      </div>
    );
  }
}

export default articleList;
