import React, { PureComponent } from 'react';
import './app.css';

import { Provider } from 'react-redux';
import store from './store';

import ArticleList from './components/articleList.connect';
import ArticlePreview from './components/articlePreview.connect';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <ArticleList />
          <ArticlePreview />
        </div>
      </Provider>
    );
  }
}

export default App;
