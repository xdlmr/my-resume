<template>
  <div class="header">
  	<div class="header-nav">
      	<div class="tab-item">
		  	  <router-link to="/home">
		  	    <i class="icon iconfont icon-index"></i>                 
	          </a>
	  	</div>
	  	<div class="tab-item">
		  	  <router-link to="/about">
		  	  	<i class="icon iconfont icon-about"></i>
		  	  </a>
	  	</div>
	  	<div class="tab-item">
		  	<router-link to="/skill">
		  		<i class="icon iconfont icon-skill"></i>
		  	</a>
	  	</div>
	  	<div class="tab-item">
		  	  <router-link to="/project">
		  	  	<i class="icon iconfont icon-experience"></i>
		  	  </a>
	  	</div>
	  	<div class="tab-item">
		  	<router-link to="/contact">
		  		<i class="icon iconfont icon-contact"></i>
		  	</a>
	  	</div>
	  	<div class="clearfix"></div>
	  </div>	
  </div>
  

</template>

<script type="text/ecmaecript-6">
	export default {
		
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.header
	  position:fixed
	  background:#000
	  bottom:0px
	  width:400px
	  left:50%
	  margin-left:-200px
	  padding:10px 0
	  text-align:center
	  border-radius:5px
	  .tab-item
	    display:inline-block
	    .icon
	      font-size:50px
	      color:#fff
	  
</style>