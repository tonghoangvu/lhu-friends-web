<template>
    <div class="float-left">
        <header class="p1 no-select">
            <label for="page" class="mr05">Trang</label>
            <button class="mr05" v-on:click="prevPage">Trước</button>
            <input type="number" id="page" class="mr05" placeholder="Page"
                v-model.number.lazy="rawPage">
            <button class="mr05" v-on:click="nextPage">Sau</button>

            <button class="mr05" v-on:click="reload">Tải lại</button>
            <input type="number" id="size" class="mr05" placeholder="Size"
                v-model.number.lazy="rawSize">
            <label for="size">mục mỗi trang</label>
        </header>
        <table class="m1 mt0">
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
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="fullName"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="classId"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Match" id="gender"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="birthday"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="placeOfBirth"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="ethnic"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="nationality"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td></td>
                    <td></td>
                    <td contenteditable="true" placeholder="Regex" id="phone"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="email"
                        v-on:keypress.enter="onFiltersChange"></td>
                    <td contenteditable="true" placeholder="Regex" id="facebook"
                        v-on:keypress.enter="onFiltersChange"></td>
                </tr>
            </thead>
            <tbody>
                <StudentItem v-for="student in studentList"
                    v-bind:key="student.index" v-bind:student="student"/>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store';
    import StudentItem from '../components/StudentItem.vue';

    export default defineComponent({
        name: 'Home',
        store: store,
        components: {
            StudentItem
        },
        data() {
            return {
                rawPage: 0 as number,
                rawSize: 10 as number,
                studentList: []
            };
        },
        computed: {
            page(): number {
                return this.rawPage >= 0 ? this.rawPage : 0;
            },
            size(): number {
                return this.rawSize > 0 ? this.rawSize : 10;
            }
        },
        watch: {
            page() {
                this.reload();
            },
            size() {
                this.reload();
            }
        },
        methods: {
            onFiltersChange(event: KeyboardEvent) {
                event.preventDefault();
                this.reload();
            },
            prevPage() {
                if (this.rawPage <= 0)
                    return;
                this.rawPage--;
            },
            nextPage() {
                this.rawPage++;
            },
            buildQuery(): Record<string, string> {
                const query: Record<string, string> = {};
                const FILTER_FIELDS: string[] = [
                    'studentId', 'fullName', 'classId', 'gender', 'birthday',
                    'placeOfBirth', 'ethnic', 'nationality', 'phone', 'email',
                    'facebook'
                ];
                for (const field of FILTER_FIELDS) {
                    const fieldValue = document.getElementById(field)?.innerText;
                    if (fieldValue)
                        query[field] = fieldValue;
                }
                return query;
            },
            changeLoading(isLoading: boolean) {
                store.commit('changeLoading', isLoading);
            },
            reload() {
                this.changeLoading(true);

                // Prepare request data
                const page: number = this.page;
                const size: number = this.size;
                const params = '?' + ['page=' + page, 'size=' + size].join('&');
                const query = this.buildQuery();
                const API_URL = process.env.NODE_ENV === 'production'
                    ? '/api/students/'
                    : 'http://localhost:3002/api/students/';

                // Fetch API
                let failed = false;
                fetch(API_URL + params, {
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(query)
                })
                    .then(response => {
                        failed = !response.ok;
                        return response.json();
                    })
                    .then(parsedJSON => {
                        if (failed)
                            return alert(parsedJSON.message);

                        // Add index field to each item
                        for (let i = 0; i < parsedJSON.length; i++)
                            parsedJSON[i].index = i + 1 + page * size;

                        this.studentList = parsedJSON;
                    })
                    .catch(error => {
                        alert('Không thể kết nối tới server');
                    })
                    .finally(() => {
                        this.changeLoading(false);
                    });
            }
        }
    });
</script>

<style scoped>
    input[type="number"] {
        width: 6ch;
        text-align: center;
    }
</style>
