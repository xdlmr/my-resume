// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import home from 'components/home/home'
import about from 'components/about/about'
import skill from 'components/skill/skill'
import project from 'components/project/project'
import contact from 'components/contact/contact'

Vue.use(VueRouter);

/* eslint-disable no-new */
const routes = [
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/skill', component: skill },
     { path: '/project', component: project },
    { path: '/contact', component: contact }
]

const router = new VueRouter({
    routes,
    linkActiveClass:'active'
})

new Vue({
    router,
    render: function(h) {
        return h(App)
    }
}).$mount('#app')

router.push('home');