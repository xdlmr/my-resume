<template>
  <div class="skill main-box" id="skill">
  	<h1 class="modular-title">Skill</h1>
  	<litlemodule :items="items"></litlemodule>
  </div>
  

</template>

<script type="text/ecmaecript-6">
	import litlemodule from 'components/litlemodule/litlemodule'
	const itemsobj=[
		{inconclass:'icon-html',title:'HTML',desc:'熟练运用HTML，熟悉HTML5新特性'},
		{inconclass:'icon-css',title:'CSS',desc:'熟练运用CSS，熟悉CSS3新特性(动画，弹性布局，响应式布局，媒体查询等)。'},
		{inconclass:'icon-javascript',title:'Javascript',desc:'熟练使用原生javascript，了解JS新标准ES6、ES7'},
		{inconclass:'icon-jquery',title:'JQuery',desc:'熟练使用Jquery，拥有一年多的开发经验'},
		{inconclass:'icon-react',title:'Vue',desc:'熟练使用vue.js,熟悉vue-router、vue-resource、vuex等技术'},
		{inconclass:'icon-frame',title:'前端框架和库',desc:'熟悉Bootstrap、MUI、WeUI、Ant Design等前端UI库和框架，了解angular.js和React.js'},
		{inconclass:'icon-tools',title:'前端工具',desc:'熟练使用WebStorm、sublime等前端编辑器，熟悉photoshop、npm、webpack、git、svn等开发工具'},
		{inconclass:'icon-Programming',title:'其他语言',desc:'熟悉php，并有实际的开发经验，熟悉mysql数据库，了解nodejs、python'}
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
	#skill
		display:flex
		align-items: center
		flex-direction: column
		line-height:1.2
		min-height:100vh
		h1
			text-align:center
			width:100%
			font-size:3.8em
		.litlemodule
			padding-bottom:80px	
			.item
				width:20em !important
				height:6em			
</style>