import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './app.css';

import { Provider } from 'react-redux';
import store from './store';


import ArticleList from './components/articleList.connect';
import ArticlePreview from './components/articlePreview';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <ArticleList />
          <ArticlePreview article={null} />
        </div>
      </Provider>
    );
  }
}

export default App;
