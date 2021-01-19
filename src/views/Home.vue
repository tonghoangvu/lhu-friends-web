<template>
    <header class="p1 clearfix">
        <button id="prev-button" class="mr05">Trước</button>
        <input type="number" placeholder="page" value="0"
            id="page-input" class="number-input mr05">
        <button id="next-button" class="mr05">Sau</button>
        <input type="number" placeholder="size" value="10"
            id="size-input" class="number-input mr05">
        <label>mục mỗi trang</label>
        <button class="float-right">Tải lại</button>
    </header>
    <div id="table-container" class="p1 pt0 float-left">
        <table>
            <thead class="no-select">
                <tr>
                    <th>STT</th>
                    <th>MSSV</th>
                    <th>Họ tên</th>
                    <th>Lớp</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Nơi sinh</th>
                    <th>Dân tộc</th>
                    <th>Quốc tịch</th>
                    <th>Ảnh</th>
                    <th>Avatar</th>
                    <th>SĐT</th>
                    <th>Email</th>
                    <th>Facebook</th>
                </tr>
                <tr>
                    <td class="text-center">0</td>
                    <td contenteditable="true" placeholder="Regex" id="studentId"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="fullName"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="classId"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Match" id="gender"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="birthday"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="placeOfBirth"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="ethnic"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="nationality"
                        class="single-line"></td>
                    <td></td>
                    <td></td>
                    <td contenteditable="true" placeholder="Regex" id="phone"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="email"
                        class="single-line"></td>
                    <td contenteditable="true" placeholder="Regex" id="facebook"
                        class="single-line"></td>
                </tr>
            </thead>
            <tbody>
                <StudentItem v-for="(value, name, index) in studentList" v-bind:key="index"
                    v-bind:data="value"/>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import StudentItem from "../components/StudentItem.vue";

    export default defineComponent({
        name: 'Home',
        components: {
            StudentItem
        },
        data() {
            return {
                studentList: []
            }
        }
    });
</script>

<style scoped>
    td[contenteditable="true"] {
        outline: none;
    }

    td[contenteditable="true"]:empty::before {
        content: attr(placeholder);
        color: gray;
        cursor: text;
        white-space: nowrap;
    }

    .number-input {
        width: 6ch;
        text-align: center;
    }
</style>
