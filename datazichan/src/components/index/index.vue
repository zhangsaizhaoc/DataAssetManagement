<template>
  <div id="Index">
    <div class="top">
    <h2>{{this.$route.query.data.name}}</h2>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for='(item,index) in arr' :key='index' v-if='item'>{{item}}</el-breadcrumb-item>
            
        </el-breadcrumb>
    </div>
    <div class="bottom">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基础信息" name="first">
                <BasicInformation></BasicInformation>
            </el-tab-pane>
            <el-tab-pane label="扩展信息" name="second">
                <ExtendedInformation></ExtendedInformation>
            </el-tab-pane>
            <el-tab-pane label="版本信息" name="third">
                <VersionInformation></VersionInformation>
            </el-tab-pane>
            <el-tab-pane label="数据分布流向信息" name="fourth">
                <DataDistributionFlow></DataDistributionFlow>
            </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import BasicInformation from '../childrenCompon/BasicInformation/BasicInformation'
  import ExtendedInformation from '../childrenCompon/ExtendedInformation/ExtendedInformation'
  import VersionInformation from '../childrenCompon/VersionInformation/VersionInformation'
  import DataDistributionFlow from '../childrenCompon/DataDistributionFlow/DataDistributionFlow'
  export default {
    name: 'Index',
    data() {
      return {
        activeName: 'first',//tab切换默认显示第一个
        arr:[],//面包屑数据
        textTitle:''
      }
    },
    components:{
        BasicInformation,//基础信息
        ExtendedInformation,//扩展信息
        VersionInformation,//版本信息
        DataDistributionFlow//数据分布流向信息
    },
    mounted() {
        this.arr=this.$route.query.arr;
    },
    inject:['reload'],
    computed:{

    },
    watch:{
      
    },
    methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  @import './index.style.css';
</style>
