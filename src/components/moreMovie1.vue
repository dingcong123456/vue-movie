<template>
    <div ref="contentWrapper" id="wrapper">
        <div class="moreMovieBox" ref="contentWrapper1">
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
              load:true,
              total:0,
              isOne:true,
              wrapHeight:0,
              scrollY:0,
              contentScroll:''
          }
        },
        props:{

        },
        created(){

            this._load();

        },
        methods:{
            _initScroll () {
//                let wrapHeight=this.$refs.contentWrapper1.offsetHeight-this.wrapHeight;
//                this.$refs.contentWrapper1.style.top=-wrapHeight+'px';
//                console.log(this.$refs.contentWrapper1.style.top=-wrapHeight+'px')




//                    let scrolly=-(this.$refs.contentWrapper1.offsetHeight-this.wrapHeight);
//                    console.log(scrolly)
//                    console.log(this.$refs.contentWrapper1.offsetHeight)
//                console.log(this.wrapHeight)



                this.contentScroll = new BScroll(this.$refs.contentWrapper, {
                    startX: 0,
                    startY:0,
                    probeType:3,
                    scrollY: true,



                });
                let List = this.$refs.contentWrapper1.getElementsByClassName('list_hook');

                //获取对应元素的列表

                this.selectMenu (this.total,this.contentScroll ,List)
                //设置监听滚动位置
                this.contentScroll.on('scroll',(pos) => {

                    this.scrollY = Math.abs(Math.round(pos.y));
//                    console.log(this.$refs.contentWrapper1.offsetHeight-this.$refs.contentWrapper.offsetHeight)
//                    console.log(this.scrollY)

                    if(this.scrollY>=(this.contentScroll.scrollerHeight-this.$refs.contentWrapper.offsetHeight)&&this.load){
                        console.log("加载"+this.$refs.contentWrapper.offsetHeight);
                        this._load();
//                        this.contentScroll.scrollToElement()
                        this.load=false;

                    }

                })
            },
            selectMenu (index,bs,List) {
//		自己默认派发事件时候(BScroll),_constructed被置为true,但是浏览器原生并没有这个属性

                //运用BScroll接口，滚动到相应位置
                console.log(List.length)
               let i=index-20;
                let el = List[i];
                console.log(el)
                bs.scrollToElement(el, 300);
            },
            _load(){
                this.$http.jsonp(`https://api.douban.com/v2/movie/${this.$route.params.type}?count=20&start=${this.total}`).then((response) => {
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
                    if(!this.isEmpty){

                        this.movies=this.movies.concat(movies);
                        console.log(this.movies)
                    }else{

                        this.movies=movies;
                        this.isEmpty=false;
                    }

                    this.load=true;

                    this.$nextTick(() => {

                        if(this.isOne){
                            this.wrapHeight=this.$refs.contentWrapper1.offsetHeight;
                            this.isOne=false;
                        }
                        this._initScroll();



                    })
                    this.total+=20;


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
        position: absolute;
        left:0;
        top:0;

    }
    #wrapper{
        position: fixed;
        width: 100%;
        top: 0px;
        left:0;
        bottom: 50px;
        overflow: hidden;
    }
    .movieItemBox{
        width: 33.3%;
        float: left;


    }

</style>