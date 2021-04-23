<template>
    <div class="float-left">
        <ActionBar v-on:reload="loadStudents" v-on:random="randomStudents"/>
        <table class="m1 mt0">
            <thead class="no-select">
                <HeaderRow/>
                <FilterRow v-on:change="reload"/>
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

    import ActionBar from '@/components/Home.ActionBar.vue';
    import HeaderRow from '@/components/Home.HeaderRow.vue';
    import FilterRow from '@/components/Home.FilterRow.vue';
    import StudentItem from '@/components/StudentItem.vue';

    export default defineComponent({
        name: 'Home',
        store: store,
        components: {
            ActionBar, HeaderRow, FilterRow, StudentItem
        },
        data() {
            return {
                studentList: [],
                random: false
            };
        },
        watch: {
            '$store.state.page'() {
                this.reload();
            },
            '$store.state.size'() {
                this.reload();
            }
        },
        methods: {
            changeLoading(isLoading: boolean) {
                store.commit('changeLoading', isLoading);
            },
            buildQuery(): Record<string, string> {
                const FILTER_FIELDS: string[] = [
                    'studentId', 'fullName', 'classId', 'gender', 'birthday',
                    'placeOfBirth', 'ethnic', 'nationality', 'phone', 'email',
                    'facebook'
                ];

                const query: Record<string, string> = {};
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
            async fetchData(apiUrl: string, params: string) {
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
            async loadData(apiUrl: string, params: string, startIndex: number) {
                this.changeLoading(true);
                try {
                    const parsedJson = await this.fetchData(apiUrl, params);
                    for (let i = 0; i < parsedJson.length; i++)
                        parsedJson[i].index = startIndex + i + 1;
                    this.studentList = parsedJson;
                } catch (e) {
                    alert('Không thể kết nối tới server');
                    console.error(e);
                } finally {
                    this.changeLoading(false);
                }
            },
            async loadStudents() {
                this.random = false;
                const API_URL = process.env.NODE_ENV === 'production'
                    ? '/api/students/'
                    : 'http://localhost:3002/api/students/';
                const params = `?page=${ store.state.page }&size=${ store.state.size }`;
                const startIndex = store.state.page * store.state.size;
                this.loadData(API_URL, params, startIndex);
            },
            async randomStudents() {
                this.random = true;
                const API_URL = process.env.NODE_ENV === 'production'
                    ? '/api/students/random'
                    : 'http://localhost:3002/api/students/random';
                const params = `?size=${ store.state.size }`;
                this.loadData(API_URL, params, 0);
            },
            reload() {
                if (this.random)
                    this.randomStudents();
                else
                    this.loadStudents();
            }
        }
    });
</script>
