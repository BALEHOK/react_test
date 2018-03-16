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
      totalCount: 0,
      selected: null
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
    return (
      <div className="app">
        <ArticleList
          articles={this.state.articles}
          selectedArticleId={this.state.selected}
          onArticleSelected={(articleId) => this.setState({selected: articleId})}
        />
        <ArticlePreview article={this.state.selected ? this.state.articles.find(a => a.id === this.state.selected) : null} />
      </div>
    );
  }
}

export default App;
