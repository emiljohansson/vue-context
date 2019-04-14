# vue-context [![Build Status](https://travis-ci.org/emiljohansson/vue-context.svg?branch=master)](https://travis-ci.org/emiljohansson/vue-context)

Creates a React like context between parent and child components.

## Demo

**https://emiljohansson.github.io/vue-context/demo/build/**

## Install

#### NPM
```bash
$ npm install @emiljohansson/vue-context
```

```javascript
import VueContext from '@emiljohansson/vue-context'

Vue.use(VueContext)
```

## Example

```javascript
const store = {
  state: {
    value: 42
  },
  methods: {
    setValue (state, newValue) {
      state.value = newValue
    }
  }
}

const root = {
  data () {
    return {
      // If you need to use the same data in the provider.
      // Otherwise you can create this directly in provide()
      appContext: this.$createContext(store)
    }
  },
  provide () {
    return {
      appContext: this.appContext
    }
  }
}

const childComponent = {
  inject: ['appContext']
}

```

## License

MIT © [Emil Johansson](http://emiljohansson.dev)
