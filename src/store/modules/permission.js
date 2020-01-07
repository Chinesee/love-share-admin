import { constantRoutes, asyncRoutes } from '@/router/router'

// 检测是否能对应上相应路由的角色权限
function hasPermission(roles, route) {
  if (route.meta?.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  }
  // 默认是具有 admin 权限的，所以返回 true
  return true
}

// 过滤没有角色权限的路由
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
}

const getters = {
  sidebar(state) {
    return state.routes
  },
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes)
  },
}

const actions = {
  generateRoutes({ commit }, roles) {
    let accessedRoutes
    if (roles.includes('super_admin')) {
      // 如果权限为 “超级管理员” 则拥有所有路由的权限
      accessedRoutes = asyncRoutes || []
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    commit('SET_ROUTES', accessedRoutes)
    return accessedRoutes
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
