<template>
  <div>
    <div v-for="list in lists" :key="list.id">
        {{ list.title }}
    </div>
  </div>
</template>

<script>
import { api } from "../../utils/api";
export default {
    data() {
        return {
            lists:[]
        }
    },

    async created() {
        // 데이터가 로딩하기 전
        this.$store.commit("SET_LOADING", true);
        const result = await api.jsonplaceholder.findAll();
        console.log(result);
        this.lists = result.data;

        // 데이터 가져온 후
        this.$store.commit("SET_LOADING", false);
    }
}
</script>

<style>

</style>