<template>
    <div id="content" class="p1 no-select">
        <h2 class="text-primary">Cài đặt</h2>
        <div class="mb1 flex-row flex-wrap align-center">
            <select :selectedIndex="selectedIndex"
                @change="changeOtherTheme($event.target.value)">
                <option value="system">Tự động</option>
                <option value="light">Sáng</option>
                <option value="dark">Tối</option>
            </select>
            &nbsp;&nbsp;
            <label class="block-line-height">Chế độ sáng/tối</label>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store';

    export default defineComponent({
        name: 'Settings',
        store: store,
        methods: {
            changeOtherTheme(value: string) {
                store.commit('changeTheme', value);
            }
        },
        computed: {
            selectedIndex() {
                const theme = store.state.theme;
                if (theme === 'light')
                    return 1;
                else if (theme === 'dark')
                    return 2;
                else
                    return 0;
            }
        }
    });
</script>

<style scoped>
    #content {
        max-width: 50rem;
        margin: 0 auto;
    }
</style>
