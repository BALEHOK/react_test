import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articleList.css';

import ArticleTile from './articleTile';

class articleList extends PureComponent {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selectedArticleId: PropTypes.number,
    loadArticles: PropTypes.func.isRequired,
    articleSelected: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    props.loadArticles();
  }

  render() {
    const { articles, selectedArticleId } = this.props;
    return (
      <div className="article-list">
        <h2>Article list</h2>
        <ul>
          {articles.map(a => (
            <li key={a.id}>
              <ArticleTile article={a} isSelected={selectedArticleId === a.id} onSelect={this.props.articleSelected} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default articleList;
