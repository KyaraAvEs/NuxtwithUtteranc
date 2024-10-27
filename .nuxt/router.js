import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d405538 = () => interopDefault(import('..\\pages\\directors_index.vue' /* webpackChunkName: "pages/directors_index" */))
const _4ddd0f88 = () => interopDefault(import('..\\pages\\movies_index.vue' /* webpackChunkName: "pages/movies_index" */))
const _fe7903a4 = () => interopDefault(import('..\\pages\\studios_index.vue' /* webpackChunkName: "pages/studios_index" */))
const _6c8dc890 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1ac036f5 = () => interopDefault(import('..\\pages\\directors\\_slug.vue' /* webpackChunkName: "pages/directors/_slug" */))
const _1dbac6a5 = () => interopDefault(import('..\\pages\\movies\\_slug.vue' /* webpackChunkName: "pages/movies/_slug" */))
const _47a22cbf = () => interopDefault(import('..\\pages\\studios\\_slug.vue' /* webpackChunkName: "pages/studios/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/directors_index",
    component: _3d405538,
    name: "directors_index"
  }, {
    path: "/movies_index",
    component: _4ddd0f88,
    name: "movies_index"
  }, {
    path: "/studios_index",
    component: _fe7903a4,
    name: "studios_index"
  }, {
    path: "/",
    component: _6c8dc890,
    name: "index"
  }, {
    path: "/directors/:slug?",
    component: _1ac036f5,
    name: "directors-slug"
  }, {
    path: "/movies/:slug?",
    component: _1dbac6a5,
    name: "movies-slug"
  }, {
    path: "/studios/:slug?",
    component: _47a22cbf,
    name: "studios-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
