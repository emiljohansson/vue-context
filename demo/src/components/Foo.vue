<template>
  <div>
    <div><b>Foo</b></div>
    <button @click="onClick">foo msg: {{ appContext.msg }} : {{ appContext.someBool }}</button>
    <div>someData: {{appContext.someData}}</div>
    <div>justForFoo: {{fooContext.justForFoo}}</div>
    <Bar />
  </div>
</template>

<script>
import { createContext } from '../../../dist/vue-context'

const store = {
  state: {
    ct: 0,
    justForFoo: 'init justForFoo'
  },
  methods: {
    incrementJustForFoo: (state) => {
      state.ct++
      state.justForFoo = `local context value - ${state.ct}`
    }
  }
}

export default {
  name: 'Foo',
  inject: ['appContext'],
  data () {
    return {
      fooContext: createContext(store)
    }
  },
  provide () {
    return {
      fooContext: this.fooContext
    }
  },
  methods: {
    onClick() {
      this.appContext.setMsg('changed from Foo!')
      this.appContext.setSomeBool(!this.appContext.someBool)
      this.appContext.setSomeData('Foo data')
      this.fooContext.incrementJustForFoo()
    }
  },
}
</script>
