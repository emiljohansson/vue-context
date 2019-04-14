export interface VueContextInstance {
    $createContext: (store: ContextStore) => any;
}
export interface ContextStore {
    state: any;
    computed?: any;
    methods?: any;
}
export declare const createContext: (store: ContextStore) => any;
declare const _default: {
    install(Vue: any): void;
};
export default _default;
