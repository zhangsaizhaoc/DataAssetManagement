import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/index'// 数据实体页
import Supplier from '@/components/Supplier/Supplier'//业务
import AssetContentCreation from '@/components/AssetContentCreation/AssetContentCreation'//创建
import DataAssetChange from '@/components/DataAssetChange/DataAssetChange'//内容维护
import EditPage from '@/components/EditPage/EditPage'//修改
import DataClassification from '@/components/DataClassification/DataClassification'//分类维护
import Details from '@/components/Details/Details'//详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'Index',
      component:Index,
    },
    {
      path: '/Supplier',
      name: 'Supplier',
      component: Supplier
    },
    {
      path: '/AssetContentCreation',
      name: 'AssetContentCreation',
      component: AssetContentCreation
    },
    {
      path: '/DataAssetChange',
      name: 'DataAssetChange',
      component: DataAssetChange
    },
    {
      path: '/EditPage',
      name: 'EditPage',
      component: EditPage
    },
    {
      path: '/DataClassification',
      name: 'DataClassification',
      component: DataClassification
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
  ]
})