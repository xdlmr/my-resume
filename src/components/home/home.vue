<template>
  <div class="home main-box">
  	 <div class="home-main">
  	 	 <div class="home-avatar-img">
  	 		<img src="./avatar_img.jpg" class="avatar-img">
  	 	 </div>
	  	 <div class="home-info">
	  	 	<p class="modular-title">李茂荣</p>
	  	 	<p class="my-descri">热爱前端，完美主义患者</p>
	  	 	<p class="my-profession">前端开发工程师</p>
	  	 	<a href="mailto:li.maorong@datatom.com" target="_blank" class="my-email">li.maorong@datatom.com</a>
	  	 </div>
  	 </div>
  </div>
  

</template>

<script type="text/ecmaecript-6">
	export default {
		
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.home-main
	    padding:40px 0 0 0
	    display:flex
	    align-items: center
	    flex-direction: column
	    font-size: 1.3vw
	    line-height: 1.15
	    .home-avatar-img
		    height:38vh
		    display:flex
		    display: -webkit-flex
		    align-items: center
		    .avatar-img	      
		      height:30vh
		      box-sizing: border-box
		      border: 10px solid #00bfff
		      border-radius:50%
		.home-info
			flex:auto
			display: flex
			display: -webkit-flex
			flex-direction: column
			align-items: center
			justify-content: center
			font-size: 1.3vw
			line-height: 1.5
			.my-descri
				font-size:1.4em
				font-weight:400
			.my-profession
				font-size:1.5em
				font-weight:500
			.my-email
				font-size:1.4em
				font-weight:400
	  


</style>