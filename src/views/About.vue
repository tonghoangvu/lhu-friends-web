<template>
    <div class="flex-col my2 flex-center no-select">
        <img src="/img/icon.svg" draggable="false" width="96" alt="lhu-friends logo">
        <h2 class="text-primary m0">lhu-friends</h2>
        <p class="text-gray">Tiện ích tìm kiếm bạn bè LHU</p>
        <p class="text-center">
            <a href="https://github.com/tonghoangvu/lhu-friends-web"
                target="_blank" rel="noreferrer">
                GitHub project
            </a>
            Made with <span class="text-red">&#x2764;</span>
            <br>
            <a href="https://icons8.com/icon/BKCQPf8biWWs/about">About icon by Icons8</a>
        </p>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'About',
        components: {}
    });
</script>

<style scoped>

</style>
