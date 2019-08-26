import axios from 'axios'
import api from './api'

const ajax = axios.create({
  baseURL: api.baseUrl
})

export const getTodos = () => {
  return ajax.get(api.todos)
}