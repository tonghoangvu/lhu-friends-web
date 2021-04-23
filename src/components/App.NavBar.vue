<template>
    <nav class="flex-row flex-wrap bg-0 no-select px1">
        <div class="stack" v-show="menuOpened">
            <router-link class="tab" to="/">Tìm kiếm</router-link>
        </div>
        <div class="stack" v-show="menuOpened">
            <router-link class="tab" to="/about">Giới thiệu</router-link>
        </div>
        <div class="stack" v-show="menuOpened">
            <router-link class="tab" to="/settings">Cài đặt</router-link>
        </div>
        <div id="nav-last" class="stack py1 mla">
            <span class="mr1" :class="classLoading"></span>
            <button class="mla" autofocus @click="toggleMenu()">Menu</button>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store';

    export default defineComponent({
        name: 'App.NavBar',
        store: store,
        data() {
            return {
                menuOpened: true
            };
        },
        computed: {
            classLoading() {
                return store.state.isLoading ? 'spinner' : '';
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpened = !this.menuOpened;
            }
        }
    });
</script>

<style scoped>
    nav {
        border-bottom: 0.0625rem solid var(--background-color-2);
    }

    .stack {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .tab {
        display: flex;
        align-items: center;
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

    @media screen and (min-width: 420px) {
        nav { margin-top: 0px !important; }
        .stack { width: unset; }
        .tab { margin-top: unset; }
    }
</style>
