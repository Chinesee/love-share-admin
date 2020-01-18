import {
  getTodoList, addTodo, deleteTodo, updateTodo,
} from '@/request/api/todo'

const state = {
  todoList: [],
  currentSelected: {},
}

const mutations = {
  SET_CURRENT_SELECTED(state, selected) {
    state.currentSelected = selected
  },
  SET_TODO_LIST(state, list) {
    state.todoList = list
  },
  TOGGLE_TAG(state, { id, tag }) {
    state.todoList.some((el) => {
      if (el._id === id) {
        el[tag] = !el[tag]
        return true
      }
      return false
    })
  },
}

const actions = {
  async getTodoList({ commit }) {
    const { code, data } = await getTodoList()
    if (code === 2000) {
      commit('SET_TODO_LIST', data.todo_list)
    }
  },

  async addTodo({ dispatch }, data) {
    const { code } = await addTodo(data)
    if (code === 2000) {
      dispatch('getTodoList')
    }
  },

  async deleteTodo({ dispatch }, data) {
    const { code } = await deleteTodo(data)
    if (code === 2000) {
      dispatch('getTodoList')
    }
  },

  async updateTodo({ dispatch }, data) {
    const { code } = await updateTodo(data)
    if (code === 2000) {
      dispatch('getTodoList')
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters: {
    adminId: state => state.info._id,
    filterItems: state => ({ type, value }) => {
      if (type === 'filter') {
        return state.todoList.filter(el => el[value])
      }
      if (type === 'tag') {
        return state.todoList.filter(el => el.tags.includes(value))
      }
      return state.todoList.filter(el => !el.is_trashed)
    },
  },
}
