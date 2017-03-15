<template>
  <div class="project main-box">
  	<h1 class="modular-title">My Project</h1>
    <div class="container" style="padding: 0 0 60px;">
        <div class="">
            <div class="col-md-12 col-sm-12">
                <div class="main-timeline">
                    <div class="timeline" v-for="project in projects">
                        <div class="timeline-icon">
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="timeline-content">
                            <h2 class="title">
                                {{project.projectname}} {{project.time}}
                                <a class="project-link" v-if="project.sourcecode" :href="project.sourcecode" target="_blank">
                                    <i class="iconfont icon-link"></i>
                                    源码
                                </a> 
                                <a class="project-link" v-if="project.connect" :href="project.connect" target="_blank">
                                    <i class="iconfont icon-link"></i>
                                    查看
                                </a>
                            </h2>
                            <p class="description">
                               {{project.describe}}
                            </p>
                            <div class="item-img">
                                <img v-if="project.pics" v-for="pic in project.pics" :src="pic">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
	    
  </div>
  

</template>

<script type="text/ecmaecript-6">
    const projectdata=
    [
            {
            "projectname":"个人博客系统",
            "time":"(2016.12)",
            "connect":"https://www.maorli.me",
            "sourcecode":"https://github.com/xdlmr/xdlmr.github.io",
            "describe":"这是一个建立在github的静态个人博客，主要是为了分享一些有趣，实用的文章，以及博主平时coding过程中总结的东西（当然这是原创）。博客会一直更新，感兴趣的可以收藏。",
            "pics": [
              "../../../static/img/myblog_img/1.png",
              "../../../static/img/myblog_img/2.png",
              "../../../static/img/myblog_img/3.png"
            ]
        }, 
        {
            "projectname":"Vue单页面简历",
            "time":"(2017.2)",
            "connect":"https://github.com/xdlmr/my-resume",
            "sourcecode":"https://github.com/xdlmr/my-resume",
            "describe":"玩过angular、react,但还是觉得vue好玩，在学习的过程中就用Vue-cli脚手架工具搭建了一个简单的单页面简历，只要用到的技术栈有vue、vue-router、es6、webpack、stylus等，欢迎点击源码给个star吧",
            "pics": [
              "../../../static/img/myresume_img/1.png",
              "../../../static/img/myresume_img/2.png"
            ]
        },
        {
            "projectname":"贵阳市公安交通管理局数据铁笼",
            "time":"(2015.11-2016.4)",
            "describe":"这是数据铁笼",
            "pics": [
              "../../../static/img/gyjg_img/1.png",
              "../../../static/img/gyjg_img/2.png",
              "../../../static/img/gyjg_img/3.png",
              "../../../static/img/gyjg_img/4.png"
            ]
        },
        {
            "projectname":"楚雄市公安局数据融合平台",
            "time":"(2016.7-至今)",
            "describe":"楚雄市公安局数据融合平台需要融合多方数据，包括警员、GIS信息、重点人员、重点车辆、重点场所、监控视频、卡口、Wifi接入、历史情报及接处警数据，以事件为线索，将关联的人和物结合在一起，通过平台调阅或主动推送相关情报，为作战决策提供判断依据。 同时，该平台需要满足实现作战中的高效指挥调度需求，支持指令分发、现场信息采集回传、警务统计和分析等功能。平台主要分为警务APP、情报分析、指挥调度、警务效率、警务工作等大模块。情报及分析将基于大数据平台提供警务工作分析（面向报警、出警）和融合情报分析（车辆、人员、报警、异常线索）。本人在项目中主要负责前端页面编写以及部分app的移动端页面，项目初期参与项目调研、需求分析，项目研发过程中负责部分php开发。项目初验负责编写验收文档，包括用户手册、需求分析说明、详细设计说明等。",
            "pics": [
              "../../../static/img/cxga_img/1.png",
              "../../../static/img/cxga_img/2.png"
            ]
        }  
    ];
	export default {  
		created() {
            this.projects=projectdata
         }
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .project
        display:flex;
        align-items: center;
        flex-direction: column;
        line-heigth:1.2;
        min-height:100vh;
    a.project-link
        color:#fff;
        font-size: .5em;
        padding: .1em .3em;
        margin-left: 10px;
        border: 1.5px solid #fff;
        border-radius: 10px;
    p.description
        margin-bottom:10px
    .item-img 
        width:100%
        img
            border: 2px solid #faebd7;
            cursor: pointer;
            cursor: zoom-in;
            margin-right: 10px;
            width: 32%
            min-width:300px
</style>