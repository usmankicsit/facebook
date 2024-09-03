import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('@/views/Home')),
        authority: [],
    },

    {
        key: "account-settings",
        path: "/account-settings",
        component: React.lazy(() => import("@/views/account-settings/index.jsx")),
        authority: [],
        meta: {
          pageContainerType: "gutterless",
        },
      },
   
]


