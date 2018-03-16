import api from '../fakeApi';

class ArticleService {
  async loadArticles(paging) {
    return await api.loadArticles(paging);
  }
}

export default new ArticleService();
