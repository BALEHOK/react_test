import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articleList.css';

import ArticleTile from './articleTile';

class articleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selectedArticleId: PropTypes.number,
    onArticleSelected: PropTypes.func.isRequired
  }

  selectArticle = (article) => {
    this.props.onArticleSelected(article.id);
  }

  render() {
    const { articles, selectedArticleId } = this.props;
    
    return (
      <div className="article-list">
        <h2>Article list</h2>
        <ul>
          {articles.map(a => (
            <li key={a.id}>
              <ArticleTile article={a} isSelected={selectedArticleId === a.id} onSelect={this.selectArticle} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default articleList;
