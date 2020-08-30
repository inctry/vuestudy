import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//import Vue from '../node_modules/vue/dist/vue.js'

import app from './App.vue'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'


var router = new VueRouter({
    routes: [
        { path: '/account', component: account },
        { path: '/goodslist', component: goodslist}
    ]
})

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