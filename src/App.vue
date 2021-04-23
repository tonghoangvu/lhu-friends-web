<template>
    <main class="flex-col">
        <NavBar/>
        <div id="content" class="flex-autosize">
            <div id="main-top"></div>  <!-- Scroll to here -->
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component"/>
                </keep-alive>
            </router-view>
        </div>
        <BackToTop/>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store';
    import {
        defaultConfig, baseTheme, lightTheme, darkTheme,
        loadConfig, isSystemThemeDark, setSystemThemeListener }
        from '@/assets/your-css/config';

    import NavBar from '@/components/App.NavBar.vue';
    import BackToTop from '@/components/App.BackToTop.vue';

    export default defineComponent({
        name: 'App',
        store: store,
        components: {
            NavBar, BackToTop
        },
        methods: {
            reloadTheme() {
                const theme = store.state.theme;
                let themeConfig;
                if (theme === 'light')
                    themeConfig = lightTheme;
                else if (theme === 'dark')
                    themeConfig = darkTheme;
                else
                    themeConfig = isSystemThemeDark() ? darkTheme : lightTheme;
                loadConfig(themeConfig);
            }
        },
        watch: {
            '$store.state.theme'() {
                this.reloadTheme();
            }
        },
        mounted() {
            // Load your-css config
            loadConfig(defaultConfig);
            loadConfig(baseTheme);

            // First reload saved theme
            store.commit('changeTheme', localStorage.getItem('theme') || 'system');

            // Track OS theme change
            setSystemThemeListener(this.reloadTheme);
        }
    });
</script>

<style scoped>
    main {
        height: 100vh;
        min-height: 100vh;
    }

    #content {
        overflow: auto;
    }
</style>
