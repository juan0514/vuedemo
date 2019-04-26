/* eslint-disable */ 
<template>
			<div class="vuegram-post">
				<div class="header">
					<img :src="post.userImage"/>
					<span class="username ">{{ post.username }}</span>
				</div>
				<div  class="contener" 
					 :class="post.filter"
					 @dblclick="clickLike"
					 :style="{backgroundImage:'url(' + post.postImage +')'}">
				</div>
				<div class="footer">
					<div class="heart" 
						 @click="clickLike"
						 :class="{fas:this.post.hasBeenLiked}"></div>
					<div class="isLike">
							<span>{{ post.likes }} likes</span>
					</div>
					<div class="caption">
						<span>{{ post.caption }}</span>
					</div>
				</div>
			</div>
</template>

<script>
	export default{
		props:["post"],
		methods:{
			clickLike(){
				this.post.hasBeenLiked ? this.post.likes -- :  this.post.likes ++ ;
				this.post.hasBeenLiked = !this.post.hasBeenLiked;
			}
		}
	}
	

</script>

<style lang="less">
  .vuegram-post {
    .header {
      height: 30px;
      border-bottom: 1px solid #fff;
      margin: 7.5px 10px;
      img {
        border-radius:50%;
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .username {
        padding-left: 5px;
        font-size: 0.9rem;
        font-weight: bold;
        vertical-align: middle;
      }
    }
    .contener{
    	width: 100%;
    	height:0;
    	padding-top:100%;
    	background-size:100% 100%;
    }
    .footer{
    	width: 100%;
    	height: 80px;
    	.heart{
    		height:20px;
    		width: 20px;
    		background-image:url("../img/herat.jpg");
    		&.fas{
    		  background-image:url("../img/icon-like-solid.png");
    	    }
    		background-size:100% 100%;
    	}
    	
    	.isLike{
    		height: 20px;
    		span{
    			line-height: 15px;
    			font-size: 15px;
    		}
    	}
    	.caption{
    		height: 40px;
    		span{
    			line-height:30px;
    			font-size: 16px;
    			color: #3c3c3c;
    		}
    		
    	}
    }
  }

</style>