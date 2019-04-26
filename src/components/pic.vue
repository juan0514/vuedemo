


/* eslint-disable */ 

<template>
	<div class="vuegram-pic">
		<div class="pic">
			<p>{{ filter.name }}</p>
			<div class="img" 
				:style="{backgroundImage:'url(' + img +')'}"
				:class="filter.name" 
				@click="changes();filterChange()">
			</div>
		</div>
		
	</div>
	
</template>

<script>
import eventBus from "../eventBus.js"

	
	export default{
		props:{
			img:String,
			filter:Object
		},
		data(){
			return{
				curstyle:""
			}
		},
		methods:{
			changes(){
				this.$emit("changes",this.filter.name)
			},
			filterChange(){
				eventBus.$emit("filterChange",this.filter.name)
			}
		}
	}
	
</script>

<style lanf="less">
	   .vuegram-pic{
		display: inline-block;
		}
		.img {
	    cursor: pointer;
	    width: 110px;
	    height: 100px;
	    background-size: cover;
	    background-position: center center;
	    margin:7px;
	    }
		p{
		  text-align: center;
		  line-height:30px;
		}

</style>