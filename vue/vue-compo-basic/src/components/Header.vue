<template>
    <div>
    <h1>HEADER</h1>
    <Search />
    </div>  
</template>

<script>
import Search from "./Search.vue"; // 1
export default {
    // 2
    components : {
        Search
    }
    // template -> HTML형식의 태그가 들어간다
    // 한가지 태그로만 감싸야한다.
    // script -> 데이터 설정..methods.. 외부 컴포넌트 가져오기..
    // style -> css 설정
}
</script>

<style>

</style>