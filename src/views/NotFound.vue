<template>
    <div class="flex-col my2 flex-center no-select">
        <h2 class="text-primary m0">
            Page not found
            &#128557;
        </h2>
        <p class="text-gray text-center mb1">
            Trang web bạn yêu cầu không tồn tại.<br>
            Hãy thử lại hoặc click nút bên dưới để quay về trang chủ...
        </p>
        <a href="/" class="fix">
            <button>Trở lại trang chủ</button>
        </a>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NotFound'
    });
</script>

<style scoped>
    a.fix:hover { border: unset; }
</style>
