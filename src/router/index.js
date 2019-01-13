import Vue from 'vue'
import VueRouter from 'vue-router'
import $store from '../store/index'
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  const openRoutes = ['Login', 'Register']

  Router.beforeEach((to, from, next) => {
    if (openRoutes.includes(to.name)) {
      next()
    } else if ($store.getters.isLogged) {
      next()
    } else {
      next('/login')
    }
  })

  return Router
}
