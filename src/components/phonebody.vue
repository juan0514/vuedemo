/* eslint-disable */ 

<template>
	<div class="phonebody">
		<div class="feed"  v-if="step ==1">
			<vuegram-body  v-for="(post,index) in posts"
				           :key = "index"
				           :post = "post">
		    </vuegram-body>
	   </div>	
	    <div  v-if="step == 2" >
			<div>
				<div class="image"  
					:style="{backgroundImage:'url(' + img +')'}"  
					:class="styles"
					>
			    </div>
			</div>
			
	    	<vuegrampic :img="img"
						 v-for="(filter,index) in filters"
						:key = "filter.name"
	    		        :filter = "filter"
	    		        @changes = "changes">
	    	</vuegrampic>
	    </div>
	    <div  v-if="step ==3">
	    	<div class="image"  
				 :style="{backgroundImage:'url(' + img +')'}"  
				 :class="styles">
	    	</div>
			<div class="caption-container">
				<textarea placeholder="Write a caption..."
					      :value="value"
					      @input="inputText">
				</textarea>
			</div>
	    </div>    
	</div>
</template>

<script>
	import vuegramBody from "./vuegram_ody.vue"
	import vuegrampic from "./pic.vue"
 

	export default{
		props:{
			posts:Array,
			step:Number,
			img:String,
			value:String,
			filters:Array
		},
	    components:{
	    	"vuegram-body" :vuegramBody,
	    	vuegrampic
	    },
	    data(){
	    	return {
	    		styles:""
	    	}
	    },
	    methods:{
	    	changes(data){
	    		this.styles = data;
	    	},
	    	inputText(event){
	    		this.$emit("inputTxet",event.target.value)
	    	}
	    }
	}
	
</script>

<style lang="less">
   .phonebody{
      overflow: hidden;
      padding-top:50px;
      padding-bottom:35px;    
   } 
  .image{
		width: 100%;
    	height:250px;
    	background-size:100% 100%;
	}
	
	
	
	.caption-container {
	    height: 210px;
	    textarea {
	      border: 0;
	      font-size: 2rem;
	      width: 100%;
	      padding:50px;
	      border-bottom: 1px solid #eeeeee;
	    }
	    textarea:focus {
	      outline: 0;
	    }
	}
</style>