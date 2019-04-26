 /* eslint-disable */ 
<template>
  <div id="app">
      <div class="appPhone">
         <div class="phoneHeader">
         	  <a href="#"  class="cancle-home" v-if="step == 2 || step == 3" @click="goToHome">Cancle</a>
            <img src="./img/timg.png" alt="" />
            <a href="#"  class="cancle-next" v-if="step == 2 " @click="step = 3" >Next</a>
            <a href="#"  class="cancle-next" v-if="step == 3 " @click = "release">Share</a>
         </div> 
            
	          <phonebody  :posts="posts" 
						          	:step="step" 
						          	:img="img" 
						          	:filters="filters"
						          	v-model="caption"
						          	@inputTxet="inputTxet">
						          	
	          </phonebody>
						         
         <div class="phoneFooter">
            <div class="homg-cta"
            	   @click="goToHome">
               <img src="./img/home.jpg" alt="" />
            </div>
            <div class="icon">
            	<input type="file" 
            		     id="file" 
            		     style="display: none;"
            		     @change="uploadPic"
            		     :disabled="step !== 1"/>
            	<label for="file">
            		 <img src="./img/jiahao.jpg"/>
            	</label>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import phonebody from "./components/phonebody.vue"
import posts from "../data/posts.js"
import filters from "../data/filters.js"
import eventBus from "./eventBus.js"



export default {
	 /* eslint-disable */ 
	name: 'app',
	created(){
	  eventBus.$on("filterChange",(evt)=>{
				  	this.filter = evt;
				  	console.log(evt)
		})
  },
	data(){
		return {
			posts,
			step:1,
			img:'',
			filters,
			filter:"",
			caption:""
		}
	},
  components: {
     phonebody
  },
  methods:{
		  	uploadPic(e){
		  		console.log(e)
			  		const file = e.target.files;
			  		if(!file.length) return;
			//		if(file.type == "image/jpeg"){
			//			console.log(111)
			//		}
			      const reader = new FileReader();
			      reader.readAsDataURL(file[0]);
			      reader.onload = eve =>{
			      	this.img = eve.target.result;
			      	this.step =2;
			      }
			  },
			  goToHome(){
			  	this.step = 1;
					this.caption = "";
			  },
			  inputTxet(data){
			  	this.caption = data;
			  },
			  release(){
            const post = {
            	  username: "juanjuan",
					      userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
					      postImage:this.img,
					      likes: 0,
					      hasBeenLiked: false,
					      caption:this.caption,
					      filter: this.filter
            }
            this.posts.unshift(post);
            this.goToHome();
			  }
			  
  }
  
  
  
}
</script>

<style lang="less">
body{
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;	
		background-color:aliceblue;	
	}
#app,.appPhone {
	width: 100%;
	height: 100%;
}
.appPhone {
	position: relative;
 .phoneHeader{
 	position: absolute;
	width: 100%;
	height: 50px;
	background-color:gainsboro;
	img{
		width: 100%;
	  height: 100%;
	}
	.cancle-home{
		text-decoration:none;
		color:blue;
		position: absolute;
		left: 0;
		line-height: 50px;
	}
	.cancle-next{
		text-decoration:none;
		color:blue;
		position: absolute;
		right: 0;
		line-height: 50px;
		}
  .icon{
  	position: absolute;
  	right:10px;
  	top: 10px;
  	width: 30px;
  	height: 30px;
  	z-index: 99;
  	cursor: pointer;
  }
 }
	.phoneFooter{
		cursor: pointer;
		position:fixed;
		bottom:0;
		width: 100%;
		height: 35px;
		background-color:#fff;
	 .homg-cta{
			position: absolute;
		  left:20px;
		  bottom:0;
		  width:30px;
		  height:30px;
		}
		img{
			width: 100%;
		  height: 100%;
		}
	  .icon{
	  	position: absolute;
	  	right:10px;
	  	 bottom:0;
	  	width: 30px;
	  	height: 30px;
	  	cursor: pointer;
	  }
	}
}


</style>
