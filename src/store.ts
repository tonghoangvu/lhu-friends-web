import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoading: false as boolean,
        theme: '' as string,
        page: 0 as number,
        size: 10 as number
    },
    mutations: {
        changePage(state, page: number) {
            state.page = page;
        },
        changeSize(state, size: number) {
            state.size = size;
        },
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
