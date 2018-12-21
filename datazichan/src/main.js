// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
var root = process.env.API_ROOT

// var urlstr=location.href;
// console.log(location)

// function url(urlstr){
//   var news = urlstr.split('?')[0].split('/')
//   var str='';
//   for(var i=0;i<news.length;i++){
//     console.log(news[i]=='meta-manager')
//     if(news[i]=='meta-manager'){
//       str='meta-manager';
//       break;
//     }else{
//       str='/';
//     }
//   }
//   return str;
// }
Vue.prototype.Root=root;//'meta-manager/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './css/style.css'
import './iconfont/iconfont.js'
// import './/at.alicdn.com/t/font_965552_86jtd7c5ucx.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
