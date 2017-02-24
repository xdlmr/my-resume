<template>
 <div class="litlemodule" >
    <div class="item" v-for="item in items">
    	<div class="item-icon">
    		<i class="iconfont" :class="item.inconclass"></i>
    	</div>
    	<div class="item-info">
	    	<p class="info-title">{{item.title}}</p>
	    	<p class="info-desc">{{item.desc}}</p>
    	</div>
    </div>
  </div>
</template>

<script type="text/ecmaecript-6">
	export default {
		props: {
	      items: {
	        type: Array
	      }     
    	}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.litlemodule
		display:flex
		flex-direction: row
		justify-content: center
		flex-wrap: wrap
		margin-top: 2em
		margin-bottom: 2em
		margin-left:7em
		flex: auto
		.item
			font-size:2.4em
			width: 13em
			height:4.5em
			display:flex
			flex-direction:row
			align-items:cneter
			margin-bottom:1em
			margin-left:1em
			.item-icon
				width:3.5em
				height:3.5em
				display:flex
				align-items:center
				justify-content:cneter
				.iconfont
					font-size:3.5em
			.item-info
				margin-left: 1em
				height:100%
				width:60%
				.info-title
					font-size:1em
					color:#1e90ff
				.info-desc
					font-size:0.9em
					color:#fff
					margin-top:0.2em
</style>