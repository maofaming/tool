<template>
    <div class="building">
        <div class="building-img">
        </div>
        <div class="building-title">
            <div class="building-title-h">哎呀...你访问的页面不存在</div>
            <div class="building-title-d">你访问的网页已经删除或移动</div>
        </div>
        <div class="building-btns">
            <div class="button">
                <div plain type="default" link="BACK">返回上一页</div>
            </div>
            <div class="button">
                <div plain type="primary" link="/home">回主页</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        components: {
        }
    }
</script>

<style lang="less" scoped>
    /**
    * 404 报错页面组件
    * @copyright copyright (c) 2017,xiaoyunquegroup.com All Rights Reserved.
    * @author Cold <coldxu_xu@xiaoyunquegroup.com>
    * @since 2017-06-13 14:21:00
    */

    .building {
        margin-top: 150px;
        margin-left: auto;
        margin-bottom: auto;
        text-align: center;
        color: #888;

        &-img {

            padding: 30px;

            img {
                width: 50%;
            }

        }

        &-title {
            &-h {
                margin-top: 50px;
                font-size: 36px;
                color: #4a4a4a;
            }

            &-d {
                margin-top: 50px;
                font-size: 24px;
                color: #9b9b9b;
            }
        }

        &-btns {
            margin-top: 100px;

            .button {
                padding: 0 30px;
            }
        }
    }

</style>
