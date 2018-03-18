import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articleList.css';

import ArticleTileById from './articleTileById.connect';

class articleList extends PureComponent {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    loadArticles: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    props.loadArticles();
  }

  render() {
    return (
      <div className="article-list">
        <h2>Article list</h2>
        <ul>
          {Object.keys(this.props.articles).map(id => (
            <li key={id}>
              <ArticleTileById articleId={+id}  />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default articleList;
