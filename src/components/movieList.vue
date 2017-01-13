<template>
    <div class="movieList">
        <div class="movieListTop">
            <div class="title">{{item.name}}</div>
            <div class="more">
                <router-link :to="moreurl">更多</router-link>
            </div>
        </div>
        <div class="moviesBox" >
            <movie-item v-for="movie in movies" :movie="movie"></movie-item>
        </div>

    </div>

</template>

<script>
    import movieItem from './movieItem'
    export default {
        name:'moveList',
        data(){
          return {
              movies:[],
              moreurl:''
          }
        },
        props:{
            item: {
                type: Object
            }

        },
        created(){
            this.moreurl=`/movie/more/${this.item.type}`;
            if(localStorage.getItem(`myMovies${this.item.type}`)){


                this.movies=JSON.parse(localStorage.getItem(`myMovies${this.item.type}`))

                return;
            }
            this.$http.jsonp(`https://api.douban.com/v2/movie/${this.item.type}?count=3&start=0`).then((response) => {
                // 响应成功回调

                let moviesDouban=response.data;

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

                console.log(movies);
                let jsonMovies = JSON.stringify(movies);
                console.log(jsonMovies)

                localStorage.setItem(`myMovies${this.item.type}`, jsonMovies);
               this.movies=movies;


            }, (response) => {
                // 响应错误回调
            });
        },
        components:{
          movieItem
        },


        methods: {


        }
    }

</script>

<style >
    .movieList{
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 20px;
        background: white;
    }
    .movieListTop{
        display: flex;
        width: 100%;
        height: 30px;

    }
    .movieListTop div{
        height: 30px;
        flex:1;
        font-size: 14px;
        line-height: 30px;
    }
    .more{
        text-align: right;
    }
    .moviesBox{
        display: flex;
    }

</style>