import React, { Component } from 'react';
import './articleList.css';

import ArticleTile from './articleTile';

class articleList extends Component {
  render() {
    return (
      <div className="article-list">
        <h2>Article list</h2>
        <ul>
          <li>
            <ArticleTile />
          </li>
          <li>
            <ArticleTile />
          </li>
        </ul>
      </div>
    );
  }
}

export default articleList;
