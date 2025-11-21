import { createWebHistory, createRouter } from 'vue-router'

import NotFound from '@/components/NotFoundPage.vue'
import Users from '@/views/Users.vue'
import Article from '@/views/Article.vue'
import UserInfo from '@/views/UserInfoPage.vue'
import ArticleInfo from '@/views/ArticleInfoPage.vue'


const routes = [
    { path: '/', component: Users },
    { path: '/users', component: Users },
    { path: '/articles', component: Article },
    { path: '/users/:userId', component: UserInfo },
    { path: '/articles/:articleId', component: ArticleInfo },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
