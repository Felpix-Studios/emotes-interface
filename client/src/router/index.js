
import VueRouter from "vue-router"
import Browse from '../views/Browse.vue'
import Create from '../views/Create.vue'
import EmotePage from '../views/EmotePage.vue'
const routes = [
    { path: '/', name:"Browse",component: Browse },
    { path: '/create', name:"Create",component: Create },
    { path: '/emotes/:id',component: EmotePage },
]

const router = new VueRouter({
    mode:"history",
    base: process.env.BASE_URL,
    routes // short for `routes: routes`
})

export default router