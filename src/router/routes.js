const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        name: 'Register',
        path: '/register',
        component: () => import('pages/Login.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        name: 'Login',
        path: '/login',
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
