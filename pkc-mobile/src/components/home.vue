<template>
	<div class="home">
		<div class="margin-space"></div>
		<div class="header">
			<div class="title">
				<p class="title-one">PKC共享身高体重秤</p>
				<p class="title-second">为低成本增粉获客而生</p>
				<p class="title-three">更高性价比的导粉神器</p>
				<router-link to="/productServicePage" class="btn-details">点击查看详情></router-link>
			</div>
			<div class="content">
				<img src="../../static/img/sideLeft.png"/>
			</div>
		</div>
		<div class="footer">
			<div class="footer-header">
				<img src="../../static/img/footer_logo.png" alt="" />
				<p>联系我们</p>
			</div>
			<div class="footer-content">
				<div class="left">
					<div>
						<img src="../../static/img/addr.png" alt="" />
						<span>地址：广州市天河区燕岭路93号新燕大厦1103</span>
					</div>
					<div>
						<img src="../../static/img/conca.png" alt="" />
						<span>张先生：17051208610</span>
					</div>
					<div>
						<img src="../../static/img/email2.png" alt="" />
						<span>zhangjinxi@pikachong.com</span>
					</div>
				</div>
				<div class="right">
					<img src="../../static/img/qrcode1.jpg"/>
				</div>
			</div>
			<div class="wrap-content-copty">© 2018   广州皮卡充科技有限公司   粤ICP备17061735号-1</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="stylus" scoped>
.home{
	height: 100vh;
	width: 100%;
	overflow-x: hidden;
	text-align: center;
	.margin-space{
		height: 100px;
	}
	.header{
	    width: 100%;
	    height: 80%;
	    overflow: hidden;
	    background: url('../../static/img/bg5.png') 0 0 no-repeat;
	    background-size: 100% 100%;
	    white-space: nowrap;
	    display: flex;
	    flex-direction: column;
	    padding-top: 20px;
	    padding-bottom: 20px;
		.title{
			.title-one{
				font-size: 46px;
				margin-bottom: 18px;
			}
			.title-second{
				font-size: 56px;
				letter-spacing: 6px;
				margin-bottom: 18px;
			}
			.title-three{
				font-size: 36px;
				margin-bottom: 18px;
			}
			.btn-details{
				height: 68px;
				display: block;
				text-decoration: none;
				color: #666666;
				width: 250px;
				margin: 0 auto;
				font-size: 26px;
				line-height: 68px;
				border: 2px solid #666666;
				border-radius: 10px;
			}
		}
		.content{
			flex: 1;
			display: flex;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.footer{
		width: 100%;
		height: 500px;
		overflow: hidden;
		background: url('../../static/img/footerBg.png') 0 0 no-repeat;
		color: #FFFFFF;
		padding-top: 20px;
		.footer-header{
			height: 30%;
			img{
				width: 100px;
				height: 100px;
			}
			p{
				width: 380px;
				margin: 0 auto;
				border-top: 1px solid #FFFFFF;
				padding-top: 10px;
				font-size: 30px;
			}
		}
		.footer-content{
			padding-top: 50px;
			display: flex;
			.left{
				flex: 1;
				div{
					font-size: 18px;
					text-align: left;
					display: flex;
					align-items: center;
					padding: 5px 10px;
					img{
						width: 68px;
						height: 68px;
						margin-right: 20px;
					}
					.space{
						display: inline-block;
						width: 65px;
					}
				}
			}
			.right{
				width: 200px;
				height: 200px;
				padding-right: 20px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.wrap-content-copty{
			padding-top: 10px;
			font-size: 12px;
		}
	}
}
</style>