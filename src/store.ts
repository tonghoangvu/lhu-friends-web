import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoading: false as boolean,
        theme: '' as string,
    },
    mutations: {
        changeLoading(state, value: boolean) {
            state.isLoading = value;
        },
        changeTheme(state, theme: string) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
        }
    },
    actions: {},
    modules: {}
});
