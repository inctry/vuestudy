<template>
  <div>
      <h1>This is a App</h1>

      <mt-button type="default" @click="show">default</mt-button>
  
      <router-link to="/account">Account </router-link>
      <router-link to="/goodslist">Goodslist</router-link>

      <router-view></router-view>
  </div>
</template>

<script>

import { Toast } from "mint-ui"

export default {
    data: function() {
        return { 
            toastinstance: null
        }
    },
    created() {
        this.begin();
    },
    methods: {
        begin() {
            this.show();
            setTimeout(()=> {
                this.toastinstance.close();
            }, 2000);
        },

        show() {
            this.toastinstance = Toast({
                message: 'click',
                position: 'top',
                duration: -1
            });
        }
    }
}

</script>

<style>

</style>