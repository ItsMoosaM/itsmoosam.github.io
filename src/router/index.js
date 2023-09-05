import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../views/HomePage.vue"
import ProjectsPage from "../views/ProjectsPage.vue"
import GamesPage from "../views/GamesPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/games',
            name: 'games',
            component: GamesPage
        }
    ]
})

export default router;