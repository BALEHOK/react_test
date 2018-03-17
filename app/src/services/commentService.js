import api from '../fakeApi';

class CommentService {
  async loadCommentsForArticle(articleId) {
    return await api.loadComments({articleId});
  }

  async loadRepliesForComment(commentId) {
    return await api.loadComments({commentId});
  }
}

export default new CommentService();
