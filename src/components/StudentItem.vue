<template>
    <tr>
        <td class="text-center">{{ student.index }}</td>
        <td class="text-center">{{ student.studentId }}</td>
        <td>{{ student.fullName }}</td>
        <td class="text-center">{{ student.classId }}</td>
        <td class="text-center">{{ student.gender }}</td>
        <td class="text-center">{{ student.birthday }}</td>
        <td class="text-center">{{ student.placeOfBirth }}</td>
        <td class="text-center">{{ student.ethnic }}</td>
        <td class="text-center">{{ student.nationality }}</td>
        <td class="img no-select">
            <img v-bind:src="student.image" alt="Ảnh cá nhân" draggable="false">
        </td>
        <td class="img no-select">
            <img v-bind:src="student.avatar" alt="Ảnh đại diện" draggable="false">
        </td>
        <td class="text-center">
            <a v-bind:href="'tel:+84' + student.phone">{{ student.phone }}</a>
        </td>
        <td>
            <a v-bind:href="'mailto:' + student.email">{{ student.email }}</a>
        </td>
        <td>
            <a v-bind:href="student.facebook" target="_blank" rel="noreferrer">
                {{ student.facebook }}
            </a>
        </td>
    </tr>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'StudentItem',
        props: {
            student: Object
        },
        components: {}
    });
</script>

<style scoped>
    td.img {
        padding: 0.5rem;
    }

    td.img > img {
        width: 100px;
    }
</style>
