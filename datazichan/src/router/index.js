import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/index'// 数据实体页
import Supplier from '@/components/Supplier/Supplier'//

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Supplier',
      component: Supplier
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})