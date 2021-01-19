<template>
    <main class="flex-col">
        <nav class="flex-row flex-wrap bg-0">
            <div class="flex-row mx1 my05">
                <router-link class="tab px1" to="/">Tìm kiếm</router-link>
                <router-link class="tab px1" to="/about">Giới thiệu</router-link>
            </div>
            <div class="flex-row align-center mla">
                <span class="spinner"></span>
                <button class="m1 ml1 no-wrap">Đăng nhập</button>
            </div>
        </nav>
        <div id="content" class="flex-autosize">
            <router-view/>
        </div>
        <a class="back-to-top" href="#"></a>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'App',
        components: {}
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
        color: var(--text-color-0);
        border-bottom: var(--bold-thickness) solid transparent;
    }

    .tab.router-link-active {
        color: var(--primary-color-0);
        border-bottom: var(--bold-thickness) solid var(--primary-color-0);
    }

    #content {
        overflow: auto;
    }
</style>
