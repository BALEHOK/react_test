
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './articleTile.css';

class articleList extends PureComponent {
  static propTypes = {
    article: PropTypes.object.isRequired,
    articleMeta: PropTypes.object.isRequired,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
  }

  static defaultProps = {
    isSelected: false
  }

  selectArticle = () => {
    const p = this.props;
    p.onSelect(p.article);
  }

  render() {
    const p = this.props;
    const { title, imageUrl, text } = p.article;
    return (
      <div
        className={classNames('article-tile', { selected: p.isSelected })}
        onClick={() => p.onSelect(p.article)}
      >
        <div className="article-tile-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="article-tile-info">
          <h3>{title}</h3>
          <p>{text}</p>
          <span className="article-tile-comments">{p.articleMeta.commentsCount} comment(s)</span>
        </div>
      </div>
    );
  }
}

export default articleList;
