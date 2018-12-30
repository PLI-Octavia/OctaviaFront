const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/connect',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'Login',
        path: '',
        component: () => import('pages/Login.vue'),
        meta: {
          requireAuth: false
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
