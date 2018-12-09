<template>
  <div id="app">
    <div class="left">
      <el-tree
        :data="data"
        :props="props1"
        :load="loadNode1"
        lazy
        @node-click="handleNodeClick"
      >
      </el-tree>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'App',
    data() {
      return {
        data:[{
          id: 1,
          name: "能源板块",
          parentid: 0,
          status: 0
        }],
        props1: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        arr:[],
      }
    },
    mounted() {
      var _this = this;
      $.ajax({
        url: "/datagovern/classification/findMenu",
        dataType: "json",
        method: 'GET',
        data: {
          "id": 0,
          "name": "",
          "parentid": "",
          "status": 0
        },
        success: function(data) {
          console.log(data);
          _this.data = data.data.length>0?data.data:[{id: 1,name: "能源板块",parentid: 0,status: 0}]
        }
      })
    },
    computed:{
      
    },
    watch:{
      
    },
    methods: {
      loadNode1(node, resolve) {
        console.log(node)
        console.log(resolve)
        var _this = this;
        setTimeout(() => {
          $.ajax({
          url: "/datagovern/classification/findMenu",
          dataType: "json",
          method: 'GET',
          data: node.data,
          success: function(data) {
            console.log(data);
            resolve(data.data);
          }
        })
        }, 500);
      },
       handleNodeClick(data) {
        console.log(data);
        var _this=this;
        this.arr.push(data.name)
        console.log(this.$router.push)
        if(data.status==1){
          this.$router.push({
            path:'/Index',
            query:{
              arr:_this.arr,
              data:data
            }
          });
        }
      }
    }
  }
</script>

<style>
  @import './css/style.css';
</style>
