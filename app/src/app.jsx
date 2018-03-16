import React, { Component } from 'react';
import './app.css';

import articleService from './services/articleSevice';

import ArticleList from './components/articleList';
import ArticlePreview from './components/articlePreview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      totalCount: 0
    };
  }

  async componentDidMount() {
    const result = await articleService.loadArticles();
    this.setState({
      articles: result.data,
      totalCount: result.totalCount
    });
  }
  render() {
    console.log('articles', this.state.articles);

    return (
      <div className="app">
        <ArticleList articles={this.state.articles} />
        <ArticlePreview articleId={0} />
      </div>
    );
  }
}

export default App;
