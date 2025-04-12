import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TabButtons from '@/components/TabButtons.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/tabs/',
        component: TabButtons,
        children: [
            {
                path: '',
                redirect: 'homeTab'
            },
            {
                path: 'homeTab',
                component: () => import('@/views/HomePage.vue')
            },
            {
                path: 'messagesTab',
                component: () => import('@/views/ViewMessagePage.vue')
            }
        ]
    },
    {
        path: '/message/:id',
        component: () => import('../views/ViewMessagePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
