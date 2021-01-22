import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoading: false as boolean
    },
    mutations: {
        changeLoading(state, value: boolean) {
            state.isLoading = value;
        }
    },
    actions: {},
    modules: {}
});
