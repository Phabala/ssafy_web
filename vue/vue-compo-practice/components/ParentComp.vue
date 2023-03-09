<template>
    <div>
        <div><h2>부모</h2></div>
        <div>{{ halbaeData }}</div>
        <div>{{ halbaeData2 }}</div>
        <div><button @click="changeHalbaeData">부모 데이터 바꾸기</button></div>
        <ChildComp :halbaeData="halbaeData" :halbaeData2="halbaeData2" @changeHalbaeDataFromChild="changeHalbaeDataFromChild"/>
    </div>
</template>

<script>
import ChildComp from "./ChildComp.vue";
export default {
    components: {
        ChildComp
    },
    props: ["halbaeData", "halbaeData2"] // 배열로 받아와야 하구나
    ,
    methods: {
        changeHalbaeData() { // emmit = 부모의 함수 실행
            this.$emit("changeHalbaeData", "랄랄라");
        },
        changeHalbaeDataFromChild(text) {
            this.$emit("changeHalbaeData", text);
        }
    }
}
</script>