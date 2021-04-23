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
            <img :src="student.image" alt="" draggable="false">
        </td>
        <td class="img no-select">
            <img :src="student.avatar" alt="" draggable="false">
        </td>
        <td class="text-center">
            <a :href="`tel:+84${ student.phone }`">{{ student.phone }}</a>
        </td>
        <td>
            <a :href="`mailto:${ student.email }`">{{ student.email }}</a>
        </td>
        <td>
            <a :href="student.facebook" target="_blank" rel="noreferrer">{{ student.facebook }}</a>
        </td>
    </tr>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'StudentItem',
        props: {
            student: Object
        }
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
