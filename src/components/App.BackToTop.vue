<template>
    <a class="back-to-top" href="#" aria-label="Back to top" v-on:click="backToTop"></a>
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
