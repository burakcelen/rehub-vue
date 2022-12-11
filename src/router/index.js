import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OurWorks from "@/views/OurWorks";
import indemnity from "@/pages/indemnity";
import product from "@/pages/product";
import property from "@/pages/property";
import deneme from "@/components/deneme";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import(/* webpackChunkName: "about" */ '../pages/404Error')
  },
  {
    path: '/our-works',
    component: OurWorks,
    children: [
      {
        path: '/our-works/professional-indemnity',
        component: indemnity,
      },
      {
        path: '/our-works/deneme',
        component: deneme,
      },
      {
        path: '/our-works/d&o',
        component: () => import(/* webpackChunkName: "about" */ '../pages/do')
      },
      {
        path: '/our-works/product-liablity',
        component: product,
      },
      {
        path: '/our-works/construction-insurance',
        component: () => import(/* webpackChunkName: "about" */ '../pages/construction')
      },
      {
        path: '/our-works/cyber-insurance',
        component: () => import(/* webpackChunkName: "about" */ '../pages/cyber')
      },
      {
        path: '/our-works/property',
        component: property
      },
      {
        path: '/our-works/fine-art',
        component: () => import(/* webpackChunkName: "about" */ '../pages/art')
      },
      {
        path: '/our-works/employers-liability',
        component: () => import(/* webpackChunkName: "about" */ '../pages/employers')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default  router
