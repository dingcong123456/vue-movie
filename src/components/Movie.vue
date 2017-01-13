<template>
    <div class="content">
        <div class="movieListBox">
            <movie-list v-for="item in list" :item="item"></movie-list>
        </div>
    </div>
</template>

<script>
    import movieList from "./movieList"
    export default {
        data() {
            return {
                list:[
                    {
                        name:'正在热映',
                        type:'in_theaters'
                    },
                    {
                        name:'即将上映',
                        type:'coming_soon'
                    },
                    {
                        name:'Top250',
                        type:'top250'
                    }

                ]
            }

        },
        components:{
            movieList
        },
        methods: {


        }
    }

</script>

<style>
    .content{
        width: 100%;
        /*padding-bottom: 50px;*/


    }
    .movieListBox{
        background: #CCC;
    }


</style>