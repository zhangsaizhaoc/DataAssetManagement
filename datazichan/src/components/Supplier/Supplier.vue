<template>
  <div id="Supplier">
    <div class="top">
    <h2>{{this.$route.query.data.name}}</h2>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for='(item,index) in arr' :key='index' v-if='item'>{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="bottom">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="业务属性" name="first">
                <BasicInformation></BasicInformation>
            </el-tab-pane>
            <el-tab-pane label="管理属性" name="second">
                <ExtendedInformation></ExtendedInformation>
            </el-tab-pane>
            <el-tab-pane label="技术属性" name="third">
                <VersionInformation></VersionInformation>
            </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import BasicInformation from '../SupplierChildrenCompon/BasicInformation/BasicInformation'
  import ExtendedInformation from '../SupplierChildrenCompon/ExtendedInformation/ExtendedInformation'
  import VersionInformation from '../SupplierChildrenCompon/VersionInformation/VersionInformation'
  export default {
    name: 'Supplier',
    data() {
      return {
        activeName: 'first',
        arr:[],
        textTitle:''
      }
    },
    components:{
        BasicInformation,
        ExtendedInformation,
        VersionInformation,
    },
    mounted() {
        this.arr=this.$route.query.arr;
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
  @import './Supplier.style.css';
</style>
