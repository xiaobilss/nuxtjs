import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49554d69 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _9b6e6a44 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _d1ee4d6c = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _5d43016c = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _289d0abc = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _3d8673ac = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _8fae7ad2 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _49554d69,
    children: [{
      path: "",
      component: _9b6e6a44,
      name: "home"
    }, {
      path: "/login",
      component: _d1ee4d6c,
      name: "login"
    }, {
      path: "/register",
      component: _d1ee4d6c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _5d43016c,
      name: "profile"
    }, {
      path: "/settings",
      component: _289d0abc,
      name: "settings"
    }, {
      path: "/editor",
      component: _3d8673ac,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _8fae7ad2,
      name: "article"
    }]
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
