<template>
    <div class="movieItem">
        <img :src="movie.coverageUrl" alt="">
        <span class="title">{{movie.title}}</span>
        <div class="fen_stars">
             <span class="stars">
                 <star :size="24" :score="movie.stars"></star>
            </span>
            <span class="fen">{{movie.stars/10}}</span>
        </div>

    </div>

</template>

<script type="text/ecmascript-6">
    import star from './star/star';

    export default {
        name:'movieItem',
        props:{
            movie: {
                type: Object
            }
        },
        created(){

        },
        components:{
          star
        },

        methods: {


        }
    }

</script>

<style>
    .movieItem{
        flex: 1;

        padding: 10px;
    }
    .movieItem img{
        width: 100%;
       height: 130px;
    }
    .movieItem .title{
        display: block;
        margin-top: 5px;
        font-size: 12px;
    }
    .stars{
        display: inline-block;
        float: left;
        /*line-height: 20px;*/
        vertical-align: middle;
        padding-top: 6.5px;

    }
    .fen{
        display: inline-block;
        float: right;
        font-size: 10px;
        line-height: 25px;

    }
    .fen_stars{
        vertical-align: middle;
    }

</style>