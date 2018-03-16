import api from '../fakeApi';

class CommentService {
  async loadCommentsForArticle(articleId) {
    return await api.loadComments({articleId});
  }
}

export default new CommentService();
