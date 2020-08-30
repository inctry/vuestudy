import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);
import app from './App.vue'

import router from './router.js'
//import Vue from '../node_modules/vue/dist/vue.js'



var vm = new Vue({
    el: '#app',
    data: {
        msg: '12'
    },
    // components: {
    //     'login': login
    // }

    render: c => c(app),
    router
});