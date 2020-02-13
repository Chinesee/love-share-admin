import Axios from 'axios'
import { errorNotify } from '@/utils/error-handler'
import { getToken } from '@/permission/token'

const service = Axios.create({
  // baseURL: '/api',
  baseURL: process.env.NODE_ENV === 'production' ? 'http://129.204.137.172/api' : '/api',
  // baseURL: 'http://127.0.0.1:7001/api',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

service.interceptors.request.use(
  (config) => {
    // 每次请求都带上token
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

const errorHandler = {
  401(status, statusText) {
    errorNotify({ title: `${status}`, message: `抱歉，您没有权限访问 - ${statusText}` })
  },
  404(status, statusText) {
    errorNotify({ title: `${status}`, message: `找不到资源 - ${statusText}` })
  },
  418(status) {
    errorNotify({ title: `${status}`, message: '登录过期，请重新登录~' })
  },
  422(status, statusText) {
    errorNotify({ title: `${status}`, message: `找不到资源 - ${statusText}` })
  },
  500(status, statusText) {
    errorNotify({ title: `${status}`, message: `服务出错 - ${statusText}` })
  },
  default() {
    errorNotify()
  },
}

service.interceptors.response.use(
  (response) => {
    try {
      const { data } = response
      const { code, msg } = data
      if (code !== 2000) {
        errorNotify({
          title: `错误代码 - ${code}`,
          message: msg,
          duration: 5000,
        })
      }
      return data
    } catch (message) {
      errorNotify({ message })
      return { code: 5000 }
    }
  },
  (error) => {
    console.log('!!!!', error.response)
    const { status, statusText } = error.response
    /* eslint no-unused-expressions: [2, { allowTernary: true }] */
    Object.prototype.hasOwnProperty.call(errorHandler, status)
      ? errorHandler[status](status, statusText)
      : errorHandler.default()
    return { code: 5000 }
  },
)

export default service
