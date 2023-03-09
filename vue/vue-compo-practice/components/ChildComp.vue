<template>
    <div>
        <h2>자식</h2>
        {{ halbaeData }}
        {{ halbaeData2 }}<br>
        <button @click="changeHalbaeDataFromChild">손자가 할배 데이터 바꾸기</button>
    </div>
</template>

<script>
export default {
    props: ["halbaeData", "halbaeData2"],
    methods: {
        changeHalbaeDataFromChild() {
            this.$emit("changeHalbaeDataFromChild", "손자가 바꿨다!");
        }
    }
}
</script>
