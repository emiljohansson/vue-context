<template>
  <div>
    <div><b>Bar</b></div>
    <button @click="onClick">bar msg: {{ appContext.msg }} : {{ appContext.someBool }}</button>
    <div>someData: {{appContext.someData}}</div>
    <div>justForFoo: {{fooContext.justForFoo}}</div>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  inject: ['appContext', 'fooContext'],
  computed: {},
  methods: {
    onClick() {
      this.appContext.setMsg('changed from Bar!')
      this.appContext.setSomeBool(!this.appContext.someBool)
      this.appContext.setSomeData('Bar data')
    }
  }
}
</script>
