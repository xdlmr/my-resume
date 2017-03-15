<template>
  <div class="contact main-box">
  	<h1 class="modular-title">Contact Me</h1>
  	<div class="contact-content" id="contact">
      <div class="contact-main">
        <div class="main-item" data-src="http://swhzhuster.xin/images/my-CV/mmqrcode1485960438307.png">
          <div class="item-icon"> <i class="iconfont icon-weixin"></i>
          </div>
          <div class="item-content">xd_lmr</div>
        </div>
        <div class="main-item" data-src="http://swhzhuster.xin/images/my-CV/qrcode_1485960492292.jpg">
          <div class="item-icon"> <i class="iconfont icon-qq"></i>
          </div>
          <div class="item-content">1837782820</div>
        </div>
        <a href="mailto:li.maorong@datatom.com" target="_blank" class="main-item">
          <div class="item-icon">
            <i class="iconfont icon-email"></i>
          </div>
          <div class="item-content">li.maorong@datatom.com</div>
        </a>
      </div>
      <div class="contact-other">
        <p class="other-title">其他方式</p>
        <div class="other-content">
          <a class="other-item" href="https://github.com/xdlmr" target="_blank">
            <i class="iconfont icon-github"></i>
          </a>
          <a class="other-item" href="https://www.zhihu.com/people/li-mao-rong-56-93/activities" target="_blank">
            <i class="iconfont icon-zhihu"></i>
          </a>
          <a class="other-item" href="http://weibo.com/u/2901819777?is_all=1" target="_blank">
            <i class="iconfont icon-weibo"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script type="text/ecmaecript-6">
	export default {
		
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contact
    display:flex
    align-items:center
    flex-direction:column
    line-height:1.2
    min-height:100vh
    padding-bottom:6em
  .contact-content
    flex-direction:column
    align-items:center
    display:flex
    display:-webkit-flex
    flex-direction:row
    justify-content:center
    flex-wrap:wrap
    flex:auto
    .contact-main
      font-size:2em
      .main-item
        display:flex
        flex-direction:row
        align-items: center;
        margin-bottom: .7em;
        color: #fff;
        cursor: pointer;
        .item-icon
          margin-right:10px
          display:flex
          align-items:center
          .iconfont
            font-size:2em
        .item-content
          font-size:1em
          color:#1e90ff
          line-height:.8em  
    .contact-other
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .other-title
        font-size: 1.6em;
        color: #f8f8ff;
        font-weight: 500;
        margin-bottom: 20px;
        position: relative;
        &:before
          position: absolute;
          content: "";
          width: 10em;
          border: 1px dashed #eee;
          left: -11em;
          top: 50%
        &:after
          position: absolute;
          content: "";
          width: 10em;
          border: 1px dashed #eee;
          right: -11em;
          top: 50%  
      .other-content 
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        .iconfont
          font-size:3.8em
  @media only screen and (max-device-width :2260px) and (-webkit-min-device-pixel-ratio : 2.5)
    #contact .contact-main .iconfont
      font-size:1.5em
    #contact .contact-main .item-content
      font-size:.8em
    #contact .contact-other .other-title:before
      width:5em
      left:-6em
    #contact .contact-other .other-title:after
      width:5em
      right:-6em   
  @media  screen and (max-width:960px) and (min-width:480px)
    #contact .contact-main .iconfont
      font-size:1.5em
    #contact .contact-main .item-content
      font-size:.8em 
    #contact .contact-other .other-title:before
      width:5em
      left:-6em
    #contact .contact-other .other-title:after
      width:5em
      right:-6em          
</style>