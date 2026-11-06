import { createRouter, createWebHistory } from 'vue-router'
import InformationView from './views/InformationView.vue'
import TopicsView from './views/TopicsView.vue'
import ResourcesView from './views/ResourcesView.vue'
import ExercisesView from './views/ExercisesView.vue'
import NoticesView from './views/NoticesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/informacion' },
    { path: '/informacion', component: InformationView, meta: { title: 'Información' } },
    { path: '/temario', component: TopicsView, meta: { title: 'Temario' } },
    { path: '/recursos', component: ResourcesView, meta: { title: 'Recursos' } },
    { path: '/ejercicios', component: ExercisesView, meta: { title: 'Ejercicios' } },
    { path: '/avisos', component: NoticesView, meta: { title: 'Avisos' } },
    { path: '/:pathMatch(.*)*', redirect: '/informacion' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | MA-0323 Métodos Numéricos`
})

export default router
