import { defineStore } from 'pinia'
import axios from 'axios'

const API = "https://68648e915b5d8d03397d8138.mockapi.io/api/v1"

export const useArticleStore = defineStore('articles', {
  state: () => ({
    articles: [],
    loading: false,
  }),
  getters: {
    getArticles: (state) => state.articles,
    getArticleById: (state) => {
      return (articleId) => state.articles.find((article) => article.id === articleId )
    },
    getLoading: (state) => state.loading,
  },
  actions: {
    async fetchArticles() {
      this.loading = true;
      const res = await axios.get(`${API}/articles`)
      this.articles = res.data
      this.loading = false;
    },
  },
})
