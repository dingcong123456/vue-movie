<template>
    <div class="tabBar" >

        <div class="tabItem" v-for="item in list">
            <router-link :to="item.to">

                <i class="iconfont" :class="item.icon"></i>
                <em>{{item.name}}</em>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'tabBar',
        data() {
            return {
                list:[
                    {
                        name:'电影',
                        icon:'icon-dianying',
                        to:'/movie'
                    },
                    {
                        name:'搜索',
                        icon:'icon-sousuo-sousuo',
                        to:'/search'
                    }
                ]
            }

        },
        compents: {

        },
        methods: {


        }
    }

</script>

<style>
    .tabBar{
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0;
        left:0;
        background: #ccc;
        display: flex;
    }
    .tabItem{
        flex: 1;
        text-align: center;
        background: #e5e5e5;
        padding-top: 5px;

    }
    .tabItem a{
        color: rgb(77,85,93);
        text-decoration: none;
    }
    .tabItem .active{
        color:#1F4BA5;
    }
    .tabItem i{
        margin-bottom:5px;
        display: block;
    }

</style>