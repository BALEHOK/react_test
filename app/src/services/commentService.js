import api from '../fakeApi';

class CommentService {
  async loadCommentsForArticle(articleId) {
    return await api.loadComments({articleId});
  }

  async loadRepliesForComment(parentCommentId) {
    return await api.loadComments({parentCommentId});
  }

  async addComment(articleId, commentId, text) {
    return await api.addComment({
      text, articleId, parentCommentId: commentId
    });
  }
}

export default new CommentService();
