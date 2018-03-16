import React, { Component } from 'react';
import './app.css';

import ArticleList from './components/articleList';
import ArticlePreview from './components/articlePreview';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ArticleList />
        <ArticlePreview articleId={0} />
      </div>
    );
  }
}

export default App;
