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
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'App',
    provide(){
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true,
        data:[{//默认树形菜单
          id: 1,
          name: "能源板块",
          parentid: 0,
          status: 0
        }],
        props1: {//树形菜单以什么key值渲染
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        arr:[],//面包屑传值
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
      reload () {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      },
      /*----树形菜单加载----*/
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
      /*----树形菜单点击----*/
       handleNodeClick(data) {
        console.log(data.path.split(','));
        var _this=this;
        if(data.name!=="能源板块"){
          this.arr=data.path.split(',')
        }
        
        if(this.arr.indexOf(data.name) == -1){//判断是否重复
            this.arr.push(data.name)
        }
        
        if(data.status==1){//当状态为1时，跳转到index路由
        console.log(this.arr)
          this.$router.push({
            path:'/Index',
            query:{
              arr:_this.arr,
              data:data
            }
          });
        }else if(data.status==2){
          this.$router.push({
            path:'/Supplier',
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

<style scoped>
  @import './css/style.css';
</style>
