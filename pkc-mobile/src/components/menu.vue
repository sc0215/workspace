<template>
	<div class="wrap" v-if="open" @click="closeMenu">
		<div class="menu">
			<router-link to="/home" class="menu-sub">首页</router-link>
			<router-link to="/productServicePage" class="menu-sub">产品服务</router-link>
			<router-link to="/aboutUsPage" class="menu-sub">关于我们</router-link>
		</div>
	</div>
</template>

<script>
export default{
	name: 'vMenu',
	props:{
		open: false
	},
	data(){
		return {
			
		}
	},
	methods: {
		closeMenu(){
			let close = this.open ? false: true;
			this.$emit('close_menu', close)
		}
	}
}
</script>

<style lang="stylus" scoped>
.wrap{
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 100px;
	z-index: 100;
	.menu{
		height: 100%;
		width: 280px;
		border-right: 1px solid #666666;
		border-left: 1px solid #666666;
		background-color: #ffffff;
		padding-left: 8px;
		overflow: hidden;
		.menu-sub{
			width: 90%;
			height: 80px;
			margin-top: 10px;
			line-height: 80px;
			text-align: center;
			text-decoration: none;
			display: block;
			font-size: 38px;
			font-weight: 500;
			color: #333333;
		}
	}
}

</style>