<template>
    <a class="back-to-top" href="#" aria-label="Back to top" @click="backToTop()"></a>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'App.BackToTop',
        methods: {
            backToTop() {
                document.getElementById('main-top')?.scrollIntoView();
            }
        }
    });
</script>
