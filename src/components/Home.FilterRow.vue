<template>
    <tr>
        <td class="text-center">0</td>
        <td contenteditable="true" placeholder="Regex" id="studentId"
            v-on:keydown.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="fullName"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="classId"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="gender"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="birthday"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="placeOfBirth"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="ethnic"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="nationality"
            v-on:keypress.enter.prevent="change"></td>
        <td></td>
        <td></td>
        <td contenteditable="true" placeholder="Regex" id="phone"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="email"
            v-on:keypress.enter.prevent="change"></td>
        <td contenteditable="true" placeholder="Regex" id="facebook"
            v-on:keypress.enter.prevent="change"></td>
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
