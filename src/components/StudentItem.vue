<template>
    <tr>
        <td class="text-center">{{ data.index }}</td>
        <td class="text-center">{{ data.studentId }}</td>
        <td>{{ data.fullName }}</td>
        <td class="text-center">{{ data.classId }}</td>
        <td class="text-center">{{ data.gender }}</td>
        <td class="text-center">{{ data.birthday }}</td>
        <td class="text-center">{{ data.placeOfBirth }}</td>
        <td class="text-center">{{ data.ethnic }}</td>
        <td class="text-center">{{ data.nationality }}</td>
        <td class="img no-select"><img v-bind:src="data.image" alt=""></td>
        <td class="img no-select"><img v-bind:src="data.avatar" alt=""></td>
        <td class="text-center">
            <a v-bind:href="'tel:+84' + data.phone">{{ data.phone }}</a>
        </td>
        <td>
            <a v-bind:href="'mailto:' + data.email">{{ data.email }}</a>
        </td>
        <td>
            <a v-bind:href="data.facebook" target="_blank" rel="noreferrer">
                {{ data.facebook }}
            </a>
        </td>
    </tr>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'StudentItem',
        props: ['data'],
        components: {}
    })
</script>

<style scoped>
    td.img {
        padding: 0.5rem;
    }

    td.img > img {
        width: 100px;
    }
</style>
