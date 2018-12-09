<template>
  <div id="Index">
    <div class="top">
    <h2>供应商实体</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for='(item,index) in arr' :key='index'>{{item}}</el-breadcrumb-item>
            
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
            <el-tab-pane label="数据分布流向信息" name="fourth">数据分布流向信息</el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import BasicInformation from '../childrenCompon/BasicInformation/BasicInformation'
  import ExtendedInformation from '../childrenCompon/ExtendedInformation/ExtendedInformation'
  import VersionInformation from '../childrenCompon/VersionInformation/VersionInformation'
  export default {
    name: 'Index',
    data() {
      return {
        activeName: 'first',
        arr:[]
      }
    },
    components:{
        BasicInformation,
        ExtendedInformation,
        VersionInformation
    },
    mounted() {
        this.arr=this.$route.query.arr
    },
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
