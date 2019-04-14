import Vue from 'vue'

export interface VueContextInstance {
  $createContext: (store: ContextStore) => any
}

export interface ContextStore {
  state: any
  computed?: any
  methods?: any
}

export const createContext: (store: ContextStore) => any = (store: ContextStore): any => {
  const ContextData = Vue.extend({
    data () {
      return {
        ...store.state
      }
    }
  })
  const contextData = new ContextData()
  const context: any = {}
  Object.keys(store.state).forEach((key) => {
    Object.defineProperty(context, key, {
      enumerable: true,
      get: () => {
        return contextData[key]
      }
    })
  })
  if (store.methods) {
    Object.keys(store.methods).forEach((key) => {
      context[key] = function (newValue: any) {
        store.methods[key](contextData, newValue)
      }
    })
  }
  return context
}

export default {
  install (Vue: any) {
    Vue.prototype.$createContext = createContext
  }
}
