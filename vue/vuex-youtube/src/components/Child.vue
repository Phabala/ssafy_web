<template>
  <div>
    Child
    <div>이름 : {{ $store.state.name }}</div>
    <div>나이 : {{ $store.state.age }}</div>
    <GrandChild/>
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue"
export default {
    components: {
        GrandChild,
    }
}
</script>

<style>

</style>