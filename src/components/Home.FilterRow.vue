<template>
    <tr>
        <td class="text-center">0</td>
        <td contenteditable="true" placeholder="Regex" id="studentId"
            @keydown.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="fullName"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="classId"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="gender"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="birthday"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="placeOfBirth"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="ethnic"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="nationality"
            @keypress.enter.prevent="change()"></td>
        <td></td>
        <td></td>
        <td contenteditable="true" placeholder="Regex" id="phone"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="email"
            @keypress.enter.prevent="change()"></td>
        <td contenteditable="true" placeholder="Regex" id="facebook"
            @keypress.enter.prevent="change()"></td>
    </tr>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Home.FilterRow',
        methods: {
            change() {
                this.$emit('change');
            }
        }
    });
</script>
