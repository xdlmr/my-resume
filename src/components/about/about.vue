<template>
  <div class="about main-box" id="about">
  	<h1 class="modular-title">About Me</h1>
  	<litlemodule :items="items"></litlemodule>
  </div>
  

</template>

<script type="text/ecmaecript-6">
	import litlemodule from 'components/litlemodule/litlemodule'
	const itemsobj=[
		{inconclass:'icon-age',title:'年龄',desc:'24'},
		{inconclass:'icon-sex',title:'性别',desc:'男'},
		{inconclass:'icon-education',title:'学历',desc:'本科'},
		{inconclass:'icon-University',title:'毕业院校',desc:'西安电子科技大学'},
		{inconclass:'icon-english',title:'英语水平',desc:'CET-4'},
		{inconclass:'icon-coordinate',title:'籍贯',desc:'广西玉林'},
		{inconclass:'icon-experience',title:'工作经验',desc:'1年'},
		{inconclass:'icon-intention',title:'求职意向',desc:'前端开发'},
		{inconclass:'icon-state',title:'现状',desc:'在职中'}
	]

	export default {
		created() {
     		this.items=itemsobj
   		 },
		components: {
	      litlemodule
	    }
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.about
		display:flex
		align-items: center
		flex-direction: column
		line-height:1.2
		padding-bottom:80px
		min-height:100vh
	@media only screen and (max-device-width :2260px) and (-webkit-min-device-pixel-ratio : 2.5)
		#about .litlemodule
			margin-left:0px
			.item
				width:100% !important
				margin-left:4.5em
				min-height:8em	!important
	@media  screen and (max-width:960px) and (min-width:480px)
		#about .litlemodule
			margin-left:0px
			.item
				width:100% !important
				min-height:8em	!important		
</style>