<template>
  <div id="app">
  	<div class="header">
  		<span class="right" @click="openMenu"><img src="../static/img/menu.png"/></span>
  		<span class="left"><img src="../static/img/PKC-H05.png"/></span>
  	</div>
  	<div class="content">
  		<router-view></router-view>
  	</div>
  	<v-menu :open="open" @close_menu="closeMenu"></v-menu>
  </div>
</template>

<script>
import vMenu from '@/components/menu'
export default {
  name: 'App',
 	data(){
 		return {
 			open: false
 		}
 	},
 	components:{
 		vMenu
 	},
 	methods:{
 		openMenu(){
 			this.open = this.open === false ?  true : false;
 		},
 		closeMenu(msg){
 			this.open = msg
 		}
 	}
 	
}
</script>

<style scoped lang="stylus">
.header{
	width: 100%;
	height: 100px;
	border: 1px solid #666666;
	background-color: #ffffff;
	padding: 0 20px;
	display: flex;
	z-index: 1000;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	span{
		height: 100%;
		display: inline-block;
	}
	.right{
		width: 68px;
		height: 68px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.left{
		flex: 1;
		position: relative;
		img{
			height: 120%;
			width: 68%;
			vertical-align: text-top;
			position: absolute;
			top: 0;
			margin: auto;
			left: 0;
			right: 0;
		}
	}
}
</style>
