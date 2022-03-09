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
