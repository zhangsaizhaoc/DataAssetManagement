import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/index'// 数据实体页
import Supplier from '@/components/Supplier/Supplier'//
import AssetContentCreation from '@/components/AssetContentCreation/AssetContentCreation'//

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AssetContentCreation',
      component: AssetContentCreation
    },
    {
      path: '/Index',
      name: 'Index',
      component:resolve => require([`@/components/index/index`], resolve),
    },
    {
      path: '/Supplier',
      name: 'Supplier',
      component: Supplier
    }
  ]
})