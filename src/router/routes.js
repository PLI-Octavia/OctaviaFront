const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Home',
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '/register',
        name: 'Register',
        component: () => import('pages/Register.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('pages/Login.vue')
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
