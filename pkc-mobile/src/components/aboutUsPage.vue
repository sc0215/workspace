<template>
	<div class="about-us">
		<div class="margin-space"></div>
		<div class="header">
			<p>关于我们</p>
			<p>About  us</p>
		</div>
		<div class="wrap">
			<div class="content">
				<p class="title">
					<span class="wire"></span>
					<span class="text">关于我们</span>
					<span class="wire"></span>
				</p>
				<div class="sub-content">
					广州皮卡充科技有限公司，是一家致力于打造性价比高的线下媒介，建设“共建共享、全民健康”的新媒体平台企业。
				</div>
			</div>
			<div class="content">
				<p class="title">
					<span class="wire"></span>
					<span class="text">CEO寄语</span>
					<span class="wire"></span>
				</p>
				<div class="sub-content">
					我们努力为运营商提供性价比更高的产品，更专业的免费服务，帮助运营商更快、更好盈利。我们相信只有真正帮助运营商成功，我们才有机会成功，这也是我们全体皮卡充人共同坚守的理念和价值观。
				</div>
			</div>
			<div class="content">
				<p class="title">
					<span class="wire"></span>
					<span class="text">联系我们</span>
					<span class="wire"></span>
				</p>
				<div class="about-us-content">
					<div class="left">
						<div>
							<img src="../../static/img/address.png" alt="" />
							<span>地址：广州市天河区燕岭路93号<br />新燕大厦1103</span>
						</div>
						<div>
							<img src="../../static/img/concact.png" alt="" />
							<span>张先生：17051208610</span>
						</div>
						<div>
							<img src="../../static/img/email.png" alt="" />
							<span>zhangjinxi@pikachong.com</span>
						</div>
					</div>
					<div class="right">
						<img src="../../static/img/qrcode1.jpg"/>
					</div>
				</div>
			</div>
		</div>
		<div id="pkcMap"></div>
	</div>
</template>

<script>
import {MP} from '../../static/js/baiduMap'
export default {
  name: 'AboutUs',
  data () {
    return {}
  },
	mounted() {
		this.$nextTick(function () {
			MP("wZxI3Gm8rGDA3spxKB8S67Xq02UFdjm7").then( BMap => {
	            var map = new BMap.Map("pkcMap");            // 创建Map实例
	            var point = new BMap.Point(113.3349500567,23.1669301529); // 创建点坐标
	            map.centerAndZoom(point,16);
	            map.enableScrollWheelZoom();
				var sContent ="<div class='sContent'><h4 class='map-company'>广州皮卡充科技有限公司</h4>" +
					"<p>地址:&nbsp;广州市天河区燕岭路新燕大厦93号1103</p>"
				 var opts = {
  					width : 288,     // 信息窗口宽度
  					height: 80
				}
				var infoWindow = new BMap.InfoWindow(sContent,opts);
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);
				marker.openInfoWindow(infoWindow);
				marker.addEventListener('click',function(){
					marker.openInfoWindow(infoWindow);
				})
			})
		})
	}
}
</script>

<style lang="stylus" scoped>
.about-us{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	.margin-space{
		height: 100px;
	}
	.header{
		height: 280px;
		width: 100%;
		background: url('../../static/img/bg2.png') 0 0 no-repeat;
		background-size: 100% 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FFFFFF;
		font-size: 38px;
		justify-content: center;
		p:first-child{
			width: 380px;
			padding-bottom: 10px;
			border-bottom: 1px solid #FFFFFF;
			font-family: "华文细黑";
		}
	}
	.wrap{
		text-align: center;
		.content{
			margin-top: 50px;
			&:last-child{
				border-bottom: 1px solid #666666;
			}
			.title{
				display: inline-flex;
				justify-content: center;
				align-items: center;
				color: #30aeff;
				font-size: 38px;
				padding-bottom: 18px;
				.text{
					margin: 0 20px;
				}
				.wire{
					display: inline-block;
					width: 48px;
				    height: 5px;
				    background-color: #30aeff;
				}
			}
			.sub-content{
				font-family: "宋体";
				width: 88%;
				margin: 0 auto;
				font-size: 28px;
				text-align: left;
				text-indent: 2em;
			}
			.about-us-content{
				display: flex;
				width: 90%;
				margin: 0 auto;
				overflow: hidden;
				.left{
					flex: 1;
					div{
						font-size: 22px;
						white-space: nowrap;
						text-align: left;
						display: flex;
						align-items: center;
						padding: 5px 10px;
						img{
							width: 68px;
							height: 68px;
							margin-right: 20px;
						}
					}
				}
				.right{
					width: 250px;
					height: 220px;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	#pkcMap{
		width: 100%;
		height: 500px;
	}
}
</style>