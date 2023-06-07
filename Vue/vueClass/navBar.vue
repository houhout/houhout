<template>
    <button @click="navBack"> 返回上一页</button>
</template>

<script>
    export default {
        data: {
            msg: 'navBar组件'
        },
        methods: {
            navBack() {
                history.back(-1);
            }
        },
    }
</script>