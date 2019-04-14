import Vue from 'vue'
import VueContext, { createContext, ContextStore } from './vue-context'

it('should create getter for state', () => {
  const expected: string = 'init value'
  const store: ContextStore = {
    state: {
      foo: expected
    }
  }
  const context: any = createContext(store)
  expect(context.foo).toBe(expected)
})

it('should mutate state', () => {
  const expected: string = 'new value'
  const store: ContextStore = {
    state: {
      bar: 'init value'
    },
    methods: {
      setBar (state: any, newValue: string): void {
        state.bar = newValue
      }
    }
  }
  const context: any = createContext(store)
  context.setBar(expected)
  expect(context.bar).toBe(expected)
})

it('should not allow to add to the state', () => {
  const store: ContextStore = {
    state: {
      bar: 'init value'
    },
    methods: {
      setBar (state: any, newValue: string): void {
        state.foo = newValue
      }
    }
  }
  const context: any = createContext(store)
  context.setBar('abc')
  expect(context.foo).toBeUndefined()
})

it('should install', () => {
  Vue.use(VueContext)
  expect(typeof Vue.prototype.$createContext).toBe('function')
})

it('should create a context', () => {
  Vue.use(VueContext)
  const store: ContextStore = {
    state: {
      bar: 'init value'
    }
  }
  const app: any = new Vue({
    data () {
      return {
        appContext: (this as any).$createContext(store),
      }
    }
  })
  expect(app.appContext.bar).toBe('init value')
})
