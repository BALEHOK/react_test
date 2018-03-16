import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articleList.css';

import ArticleTile from './articleTile';

class articleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    const { articles } = this.props;
console.log('articles', articles)
    return (
      <div className="article-list">
        <h2>Article list</h2>
        <ul>
          {articles.map(a => (
            <li key={a.id}>
              <ArticleTile article={a} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default articleList;
