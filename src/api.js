import axios from "axios";

const articleApi = axios.create({
  baseURL: "http://nc-news-2022.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return articleApi
    .get("/articles", { params: { topic: topic } })
    .then((res) => {
      return res.data.articles;
    });
};

export const fetchTopics = () => {
  return articleApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const fetchArticlesById = (article_id) => {
  return articleApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticlesById = (article_id, inc_votes) => {
  return articleApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((res) => {
      return res.data.article;
    });
};

export const fetchCommentsById = (article_id) => {
  return articleApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
