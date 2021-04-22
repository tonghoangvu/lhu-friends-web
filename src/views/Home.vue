<template>
    <div class="float-left">
        <header class="p1 no-select">
            <label for="page" class="mr05">Trang</label>
            <button class="mr05" v-on:click="prevPage">Trước</button>
            <input type="number" id="page" class="mr05" placeholder="Page"
                v-model.number.lazy="rawPage">
            <button class="mr05" v-on:click="nextPage">Sau</button>

            <button class="mr05" v-on:click="reload">Tải lại</button>
            <button class="mr05" v-on:click="random">Random</button>
            <input type="number" id="size" class="mr05" placeholder="Size"
                v-model.number.lazy="rawSize">
            <label for="size">mục mỗi trang</label>
        </header>
        <table class="m1 mt0">
            <thead class="no-select">
                <HeaderRow/>
                <FilterRow/>
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

    import HeaderRow from '@/components/Home.HeaderRow.vue';
    import FilterRow from '@/components/Home.FilterRow.vue';
    import StudentItem from '@/components/StudentItem.vue';

    export default defineComponent({
        name: 'Home',
        store: store,
        components: {
            HeaderRow, FilterRow, StudentItem
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
            changeLoading(isLoading: boolean) {
                store.commit('changeLoading', isLoading);
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
                    const FILTER_ELEMENT = document.getElementById(field);
                    if (!FILTER_ELEMENT)
                        continue;

                    const fieldValue = FILTER_ELEMENT.innerText;
                    if (fieldValue) {
                        const formattedValue = fieldValue
                            .replaceAll(/\n|\r/g, ' ')  // Trim line ending
                            .replaceAll(/\s\s+/g, ' ')  // Trim multiple spaces
                            .trim();
                        if (!formattedValue)
                            FILTER_ELEMENT.innerText = '';
                        query[field] = formattedValue;
                    }
                }
                return query;
            },
            async fetchFilteredData(apiUrl: string, params: string) {
                let failed = false;
                return await fetch(apiUrl + params, {
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(this.buildQuery())
                }).then(response => {
                    failed = !response.ok;
                    return response.json();
                }).then(parsedJson => {
                    if (failed)
                        throw new Error(parsedJson.message);
                    return parsedJson;
                });
            },
            async reload() {
                // Prepare request data
                const page: number = this.page;
                const size: number = this.size;
                const params = '?' + ['page=' + page, 'size=' + size].join('&');
                const API_URL = process.env.NODE_ENV === 'production'
                    ? '/api/students/'
                    : 'http://localhost:3002/api/students/';

                // Fetch API
                this.changeLoading(true);
                try {
                    const parsedJson = await this.fetchFilteredData(API_URL, params);
                    for (let i = 0; i < parsedJson.length; i++)
                        parsedJson[i].index = i + 1 + page * size;
                    this.studentList = parsedJson;
                } catch (e) {
                    alert(`Không thể kết nối tới server\n${ e }`);
                    console.log(e);
                } finally {
                    this.changeLoading(false);
                }
            },
            async random() {
                const size: number = this.size;
                const params = '?' + ['size=' + size].join('&');
                const API_URL = process.env.NODE_ENV === 'production'
                    ? '/api/students/random'
                    : 'http://localhost:3002/api/students/random';

                // Fetch API
                this.changeLoading(true);
                try {
                    const parsedJson = await this.fetchFilteredData(API_URL, params);
                    for (let i = 0; i < parsedJson.length; i++)
                        parsedJson[i].index = i;
                    this.studentList = parsedJson;
                } catch (e) {
                    alert(`Không thể kết nối tới server\n${ e }`);
                    console.log(e);
                } finally {
                    this.changeLoading(false);
                }
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
