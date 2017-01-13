<template>
<div>首页</div>
</template>

<script type="text/ecmascript-6">
    import {ajax} from "../util/ajax"
export default{
    data(){
        return {
            data:{}
        }
    },
    created(){
//        ajax({
//            url: "http://localhost:8080?key=5eae18f614522ef13133ee32b55cf3e8&city=杭州",              //请求地址
//            type: "GET",                       //请求方式
//            //data: { name: "super", age: 20 },        //请求参数
//            dataType: "json",
//            success: function (response, xml) {
//                // 此处放成功后执行的代码
//                console.log(response)
//            },
//            fail: function (status) {
//                // 此处放失败后执行的代码
//            }
//        });
        this.$http.jsonp('http://op.juhe.cn/onebox/movie/pmovie?key=5eae18f614522ef13133ee32b55cf3e8&city=杭州').then((response) => {
            // 响应成功回调
            console.log(response.data)
        }, (response) => {
            // 响应错误回调
        });
    }

}
</script>

