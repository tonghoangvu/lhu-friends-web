<template>
    <main class="flex-col">
        <nav id="nav" class="flex-row flex-wrap bg-0 no-select px1">
            <div class="stack">
                <router-link class="tab" to="/">Tìm kiếm</router-link>
            </div>
            <div class="stack">
                <router-link class="tab" to="/about">Giới thiệu</router-link>
            </div>
            <div class="stack">
                <router-link class="tab" to="/settings">Cài đặt</router-link>
            </div>
            <div id="nav-last" class="stack py1 mla">
                <span class="mr1" v-bind:class="$store.state.isLoading ? 'spinner' : ''"></span>
                <button class="mla" v-on:click="toggleMenu" autofocus>Menu</button>
            </div>
        </nav>
        <div id="content" class="flex-autosize">
            <div id="main-top"></div>  <!-- Scroll to here -->
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component v-bind:is="Component"/>
                </keep-alive>
            </router-view>
        </div>
        <a class="back-to-top" href="#" aria-label="Back to top" v-on:click="backToTop"></a>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store';
    import {
        defaultConfig, baseTheme, lightTheme, darkTheme,
        loadConfig, isSystemThemeDark, setSystemThemeListener
    } from '@/assets/your-css/config';

    export default defineComponent({
        name: 'App',
        store: store,
        methods: {
            backToTop() {
                document.getElementById('main-top')?.scrollIntoView();
            },
            toggleMenu() {
                const navElem = document.getElementById('nav');
                const navLastElem = document.getElementById('nav-last');
                if (!navElem || !navLastElem)
                    return;
                const topPos: number = navLastElem.getBoundingClientRect().top + window.scrollY;
                navElem.style.marginTop = (-topPos).toString() + 'px';
            },
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
            loadConfig(defaultConfig);
            loadConfig(baseTheme);

            // Load previous theme (in localStorage) and update UI (by watch)
            store.commit('changeTheme', localStorage.getItem('theme') || 'system');

            // Track OS theme change anytime
            setSystemThemeListener(this.reloadTheme);

            // Collapse menu on mobile
            this.toggleMenu();
        }
    });
</script>

<style scoped>
    .stack {
        display: flex;
        align-items: center;
        width: 100%;  /* Override */
    }

    .tab {
        display: flex;
        align-items: center;  /* Center text inside a */
        width: 100%;
        min-height: 2.4rem;
        margin-top: 0.5rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        color: var(--text-color-0);
        border-bottom: var(--bold-thickness) solid transparent;
    }

    .tab.router-link-active {
        color: var(--primary-color-0);
        border-bottom: var(--bold-thickness) solid var(--primary-color-0);
    }

    #nav {
        transition: margin-top 0.4s ease-in-out;
    }

    @media screen and (min-width: 420px) {
        .stack { width: unset; }
        .tab { margin-top: unset; }
        #nav { margin-top: 0px !important; }
    }

    main {
        height: 100vh;
        min-height: 100vh;
    }

    #content {
        overflow: auto;
    }
</style>
