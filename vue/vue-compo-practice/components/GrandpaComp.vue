<template>
    <div>
        <div><h2>할배</h2></div>
        {{halbaeData}}<br>
        {{halbaeData2}}
        <ParentComp 
        :halbaeData = "halbaeData" 
        :halbaeData2 = "halbaeData2" 
        @changeHalbaeData="changeHalbaeData"
        @changeHalbaeDataFromChild="changeHalbaeData"/> <!-- = 왼쪽이 자식, 오른쪽은 부모. @는 이벤트를 받을때 뿐만 아니라 emmit 을 받을때도 사용된다. -->
    </div>
</template>

<script>
import ParentComp from "./ParentComp.vue";
export default {
    data() {
        return {
            halbaeData : "나는 할배데이터!",
            halbaeData2 : "나는 할배데이터2!!"
        }
    },
    components: {
        ParentComp
    },
    methods: {
        changeHalbaeData(text) {
            this.halbaeData = text;
        }
    }
}
</script>
