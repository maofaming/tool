import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const NotFound = () => import('./views/NotFound.vue')

let vueRouter = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '404',
            component: NotFound,
            name: '404',
        }, {
            path: '*',
            component: NotFound,
            name: '未知页面',
        }
    ]
})

export default vueRouter
