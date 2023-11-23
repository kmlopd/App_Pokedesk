import { createRouter, createWebHistory } from 'vue-router'
import PokemonsView from '../views/PokemonView.vue'
import PokemonDetailView from '../views/PokemonDetailView.vue'
import StatsView from '../views/StatsView.vue'
import AbilitiesView from '../views/AbilitiesView.vue'
import MovesView from '../views/MovesView.vue'

const routes = [
  {
    path:'/',
    name: 'pokemos-list',
    component: PokemonsView
  },
  {
    path:'/pokemon-detail/:name',
    name:'pokemon-detail',
    component: PokemonDetailView,
    children: [
      {
        path:'stats',
        name:'stats',
        component:StatsView
      },
      {
        path:'abilities',
        name:'abilities',
        component:AbilitiesView
      },
      {
        path:'moves',
        name:'moves',
        component:MovesView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
