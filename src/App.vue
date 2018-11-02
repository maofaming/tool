<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted(){

        }
    }
</script>

<style lang="less">
    html, body {
        width: 100%;
        height: 100%;
        position: relative;
        /*overflow: hidden;*/
    }

    /*另一个坑，使用postcss-viewport-units将会给具有content属性的元素造成一定的影响，比如你的项目中使用伪元素::before、::after或者伪类:before、:after之类。
    那么使用该插件，会自动替换你原来的content内容，为了避免该现象，需要在content的属性值末尾添加!important。*/
    img {
        content: normal !important;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: center;
        width: 100%;
        height: 100%;

        /*input {*/
            /*user-select: all;*/
        /*}*/
    }
</style>
