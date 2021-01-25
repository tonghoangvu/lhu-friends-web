<template>
    <main class="flex-col">
        <nav id="nav" class="flex-row flex-wrap bg-0 no-select px1">
            <div class="stack">
                <router-link class="tab" to="/">Tìm kiếm</router-link>
            </div>
            <div class="stack">
                <router-link class="tab" to="/about">Giới thiệu</router-link>
            </div>
            <div id="nav-last" class="stack py1 mla justify-start">
                <span class="mr1" v-bind:class="$store.state.isLoading ? 'spinner' : ''"></span>
                <button class="mla" v-on:click="toggleMenu">Menu</button>
            </div>
        </nav>
        <div id="content" class="flex-autosize">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component v-bind:is="Component"/>
                </keep-alive>
            </router-view>
        </div>
        <a class="back-to-top" href="#" aria-label="Back to top"
            v-on:click="backToTop"></a>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from './store';

    export default defineComponent({
        name: 'App',
        store: store,
        components: {},
        methods: {
            backToTop() {
                document.getElementById('home-top')?.scrollIntoView();
            },
            toggleMenu() {
                const navElem = document.getElementById('nav');
                const navLastElem = document.getElementById('nav-last');
                if (!navElem || !navLastElem)
                    return;
                const topPos: number = navLastElem.getBoundingClientRect().top + window.scrollY;
                navElem.style.marginTop = (-topPos).toString() + 'px';
            }
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
        width: 100%;
        min-height: 2.4rem;
        align-items: center;  /* Center text inside a */
        margin-top: 0.5rem;
        margin-bottom: unset;  /* Override */
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        color: var(--text-color-0);
        border-bottom: var(--bold-thickness) solid transparent;
    }

    .tab.router-link-active {
        color: var(--primary-color-0);
        border-bottom: var(--bold-thickness) solid var(--primary-color-0);
    }

    @media screen and (min-width: 350px) {
        .stack {
            width: unset;
        }

        .tab {
            margin-bottom: 0.5rem;
        }

        nav {
            margin-top: 0px !important;
        }
    }

    main {
        height: 100vh;
        min-height: 100vh;
    }

    #nav {
        transition: margin-top 0.4s ease-in-out;
    }

    #content {
        overflow: auto;
    }
</style>
