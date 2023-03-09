<template>
    <div>
        <h1>Detail</h1>
        <div>여기는 {{id}}의 디테일 페이지입니다!</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
        }
    },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>