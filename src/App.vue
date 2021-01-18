<template>
    <main class="flex-col">
        <nav class="flex-row flex-wrap bg-0">
            <div class="flex-row m05">
                <router-link class="tab px1" to="/">Home</router-link>
                <router-link class="tab px1" to="/about">About</router-link>
            </div>
            <div class="flex-row align-center m05 mla">
                <span class="spinner"></span>
                <button class="m05 ml1 no-wrap">Đăng nhập</button>
            </div>
        </nav>
        <div class="flex-autosize m05">
            <router-view/>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'App',
        components: {},
    });
</script>

<style scoped>
    main {
        height: 100vh;
        min-height: 100vh;
    }

    .tab {
        display: flex;
        align-items: center;
        color: var(--text-color);
        border-bottom: var(--bold-thickness) solid transparent;
    }

    .tab.router-link-active {
        color: var(--primary-color);
        border-bottom: var(--bold-thickness) solid var(--primary-color);
    }
</style>
