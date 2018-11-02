<template>
    <div class="home">
        <h1>清除html页面样式及标签</h1>
        <div class="content-box">
            <div class="input-content">
                <textarea id="input-textarea"></textarea>
            </div>
            <div class="result-content">
                <textarea id=result-textarea></textarea>
            </div>
        </div>
        <div class="config-box"></div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {
        },
        mounted(){

        }
    }
</script>

<style lang="less">
    .home {
        width: 100px;
        height: 100px;
    }
</style>
