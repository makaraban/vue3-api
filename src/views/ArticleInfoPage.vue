<template>
    <div v-if="loading" class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
                <div class="h-2 rounded bg-gray-200"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                        <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div class="h-2 rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Hello Article: {{ $route.params.articleId }}</p>
        <p>Age: {{ getArticleById($route.params.articleId).text }}</p>
        <p>Salary: {{ getArticleById($route.params.articleId).byUser }}</p>
        <!-- <p>Name: {{ article.name }}</p> -->
    </div>
</template>
<script>
import { useArticleStore } from '@/stores/articleStore';
import { mapState } from 'pinia';
// import axios from 'axios';
// const API = "https://68648e915b5d8d03397d8138.mockapi.io/api/v1";
export default {
    async mounted() {
        // const articleId = this.$route.params.articleId
        // this.loading = true
        // const response = await axios.get(`${API}/articles/${articleId}`)
        // this.article = response.data
        // this.loading = false
        // console.log(this.article)
    },
    data() {
        return {
            article: {},
            loading: false
        }
    }
    ,computed: {
        ...mapState(useArticleStore, { getArticleById: 'getArticleById', loading: 'getLoading' })
    }
}
</script>
