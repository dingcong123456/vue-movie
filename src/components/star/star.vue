<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
	</div>
</template>

<script>
	const LENGTH = 5;
	const CLS_ON = 'on';
	const CLS_HALF = 'half';
	const CLS_OFF = 'off';

	export default {
		name: 'star',
		data() {
			return {
				msg: ''
			}
		},
		props: {
			size: {
				type: Number
			},
			score: {
				type: String
			}
		},
		//计算属性,计算星星的样式
		computed: {
			starType() {
				return 'star-' + this.size;
			},
			itemClasses () {
				let result = [];
				//判断全星半星
//				let score = Math.floor(this.score * 2) / 2;
				let score = this.score/10;
				//是否有小数,小数半星
				let hasDecimal = score % 1 !== 0;
				//整数
				let integer = Math.floor(score);
				for (let i=0; i<integer; i++) {
					result.push(CLS_ON);
				}
				if (hasDecimal) {
					result.push(CLS_HALF);
				}
				while(result.length < LENGTH ){
					result.push(CLS_OFF);
				}
				return result
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.star {
		font-size: 0;
	}
	
	.star .star-item {
		display: inline-block;
		background-repeat: no-repeat;
	}
	
	.star-item:last-child {
		margin-right: 0;
	}
	
	.star-48 .star-item {
		width: 20px;
		height: 20px;
		margin-right: 22px;
		-webkit-background-size: 20px 20px;
		background-size: 20px 20px;
	}
	
	.star-48 .on {
		background-image: url(star48_on@3x.png);
	}
	
	.star-48 .half {
		background-image: url(star48_half@3x.png);
	}
	
	.star-48 .off {
		background-image: url(star48_off@3x.png);
	}
	
	.star-36 .star-item {
		width: 15px;
		height: 15px;
		margin-right: 16px;
		-webkit-background-size: 15px 15px;
		background-size: 15px 15px;
	}
	
	.star-36 .on {
		background-image: url(star36_on@3x.png);
	}
	
	.star-36 .half {
		background-image: url(star36_half@3x.png);
	}
	
	.star-36 .off {
		background-image: url(star36_off@3x.png);
	}
	
	.star-24 .star-item {
		width: 10px;
		height: 10px;
		margin-right: 3px;
		-webkit-background-size: 10px 10px;
		background-size: 10px 10px;
	}
	
	.star-24 .on {
		background-image: url(star24_on@3x.png);
	}
	
	.star-24 .half {
		background-image: url(star24_half@3x.png);
	}
	
	.star-24 .off {
		background-image: url(star24_off@3x.png);
	}
</style>