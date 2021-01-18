<template>
    <div class="flex-col my2 flex-center">
        <img src="/icons/icon-96.png" alt="">
        <h2 class="text-primary m0">lhu-friends</h2>
        <p class="text-gray">Tiện ích tìm kiếm bạn bè LHU</p>
        <p>
            <a href="https://github.com/tonghoangvu/lhu-friends-web"
                target="_blank" rel="noreferrer">
                GitHub project
            </a>
            Made with <span class="text-red">&#x2764;</span>
            <br>
            <a target="_blank" href="https://icons8.com/icons/set/meeting">
                Meeting icon
            </a>
            icon by
            <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'About',
        components: {},
    });
</script>

<style scoped>

</style>
