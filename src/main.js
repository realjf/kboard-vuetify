// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css';
import Api from './api'
import Vuelidate from 'vuelidate';
import VueResource from 'vue-resource' // 用于读取本地json文件

Vue.use(VueResource)
Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(Api);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // ...

  next();
})

router.afterEach((to, from) => {
  // ...
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'fa4', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
  }), // 初始化vuetify
  components: { App },
  template: '<App/>'
})
