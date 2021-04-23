<template>
    <header class="p1 no-select">
        <label for="page" class="mr05">Trang</label>
        <button class="mr05" @click="prevPage()">Trước</button>
        <input type="number" id="page" class="mr05" placeholder="Page"
            :value="$store.state.page"
            @keypress.enter="changePage($event.target.value)">
        <button class="mr05" @click="nextPage()">Sau</button>

        <button class="mr05" @click="reload()">Tải lại</button>
        <button class="mr05" @click="random()">Random</button>
        <input type="number" id="size" class="mr05" placeholder="Size"
            :value="$store.state.size"
            @keypress.enter.prevent="changeSize($event.target.value)">

        <label for="size">mục mỗi trang</label>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store';

    export default defineComponent({
        name: 'Home.ActionBar',
        store: store,
        methods: {
            changePage(page: number | string) {
                if (page >= 0)
                    store.commit('changePage', +page);  // Input value may be string
            },
            changeSize(size: number | string) {
                if (size >= 1)
                    store.commit('changeSize', +size);  // Input value may be string
            },
            prevPage() {
                this.changePage(store.state.page - 1);
            },
            nextPage() {
                this.changePage(store.state.page + 1);
            },
            reload() {
                this.$emit('reload');
            },
            random() {
                this.$emit('random');
            }
        }
    });
</script>

<style scoped>
    input[type="number"] {
        width: 6ch;
        text-align: center;
    }
</style>
