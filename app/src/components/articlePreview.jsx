import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

import ArticleComments from './articleComments.connect';

class articlePreview extends PureComponent {
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

        <ArticleComments article={article} />
      </div>
    );
  }
}

export default articlePreview;
