<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" />
    <div><b>App</b></div>
    <button @click="onClick">app msg: {{ appContext.msg }} - {{ appContext.someBool }}</button>
    <div>someData: {{appContext.someData}}</div>
    <hr>
    <Foo />
    <hr>
    <Foo />
    <hr>
  </div>
</template>

<script>
const store = {
  state: {
    msg: 'Initial message',
    someData: 'abc',
    someBool: false,
    someValue: 123,
  },
  methods: {
    setMsg (state, newValue) {
      state.msg = newValue
    },
    setSomeData (state, newValue) {
      state.someData = newValue
    },
    setSomeBool (state, newValue) {
      state.someBool = newValue
    },
  }
}

export default {
  name: 'App',
  data () {
    return {
      appContext: this.$createContext(store),
    }
  },
  provide () {
    return {
      appContext: this.appContext
    }
  },
  computed: {},
  methods: {
    onClick() {
      this.appContext.setMsg('changed from App')
      this.appContext.setSomeBool(!this.appContext.someBool)
      this.appContext.setSomeData('App data')
    }
  }
}
</script>
