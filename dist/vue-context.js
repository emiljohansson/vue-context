import Vue from 'vue';
export const createContext = (store) => {
    const ContextData = Vue.extend({
        data() {
            return {
                ...store.state
            };
        }
    });
    const contextData = new ContextData();
    const context = {};
    Object.keys(store.state).forEach((key) => {
        Object.defineProperty(context, key, {
            enumerable: true,
            get: () => {
                return contextData[key];
            }
        });
    });
    if (store.methods) {
        Object.keys(store.methods).forEach((key) => {
            context[key] = function (newValue) {
                store.methods[key](contextData, newValue);
            };
        });
    }
    return context;
};
export default {
    install(Vue) {
        Vue.prototype.$createContext = createContext;
    }
};
