<template>
    <div>
        <div class="moreMovieBox" v-infinite-scroll="_load" infinite-scroll-disabled="load" infinite-scroll-distance="10">
            <div class="loading" v-show="load">
                <img src="../../static/img/loading.gif" alt=""  >
            </div>

            <div class="movieItemBox list_hook" v-for="movie in movies">
                <movie-item :movie="movie"></movie-item>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import movieItem from './movieItem'
    export default{
        name:'moreMovie',
        data(){
            return {
                movies:[],
                isEmpty:true,
                load:false,
                total:0,
            }
        },
        props:{

        },
        created(){

            this._load();

        },
        methods:{
            _load(){
                this.load=true;
                this.$http.jsonp(`https://api.douban.com/v2/movie/${this.$route.params.type}?count=20&start=${this.total}`).then((response) => {
                    // 响应成功回调

                    let moviesDouban=response.data;
                    if( !moviesDouban.subjects[0]){
                        alert("没有更多了");
                        this.load=true;
                        return;
                    }

                    let movies = [];
                    for(let subject in moviesDouban.subjects){
                        let title = moviesDouban.subjects[subject].title;
                        let titleLength = title.length;
                        if(titleLength>=6){
                            title = title.substring(0,6)+ '...';
                        }
                        let temp = {
                            stars: moviesDouban.subjects[subject].rating.stars,
                            average: moviesDouban.subjects[subject].rating.average,
                            title: title,
                            coverageUrl: moviesDouban.subjects[subject].images.large,
                            movieId:moviesDouban.subjects[subject].id
                        };
                        movies.push(temp);
                    }
                    if(!this.isEmpty){
                        this.movies=this.movies.concat(movies);
                    }else{
                        this.movies=movies;
                        this.isEmpty=false;
                    }
                    this.total+=20;
                    this.load=false;


                }, (response) => {
                    // 响应错误回调
                });
            }
        },
        components:{
            movieItem
        }

    }


</script>

<style>
    .moreMovieBox{
        height:auto;
        width: 100%;
        overflow: hidden;
        padding: 10px;
        box-sizing: border-box;
    }
    .movieItemBox{
        width: 33.3%;
        float: left;


    }
    .loading{
        width:100px;
        height:100px;
        position: fixed;
        left:50%;
        margin-left: -50px;
        top:50%;
        margin-top: -50px;
        text-align: center;
        border-radius: 5px;
        background: rgba(0,0,0,0.4);
    }
    .loading>img{
        width: 50px;
        height: 50px;
        margin-top: 25px;

    }

</style>