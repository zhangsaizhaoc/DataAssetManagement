<template>
  <div id="app">
    <div class="left">
      <ul>
        <li ref='clicka' @click='fnc'>
          <h6><router-link to="/"><i class='el-icon-caret-right'></i>数据资产查询</router-link></h6>
          <el-tree v-if="isRouterAlive2" :data="data" :props="props1" :load="loadNode1" :highlight-current='true' lazy @node-click="handleNodeClick">
          </el-tree>
        </li>
        <li ref='lis' @click="fnc2">
          <p>
            <router-link to="/DataClassification">数据资产分类维护</router-link>
          </p>
          <p>
            <router-link to="/DataAssetChange">数据资产内容维护</router-link>
          </p>
        </li>
      </ul>
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
    provide() {
      return {
        reload: this.reload,
        reload2: this.reload2
      }
    },
    data() {
      return {
        isRouterAlive: true,
        isRouterAlive2: true,
        data: [{ //默认树形菜单
          id: 1,
          name: "能源板块",
          parentid: 0,
          status: 0
        }],
        props1: { //树形菜单以什么key值渲染
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        arr: [], //面包屑传值
        flag: false,
        textVal:'',
        functi:null
      }
    },
    mounted() {
      var _this = this;
      console.log(this.Root)
      $.ajax({
        url: `${this.Root}datagovern/classification/findMenu`,
        dataType: "json",
        method: 'POST',
        data: {
          "id": 0,
          "name": "",
          "parentid": "",
          "status": 0
        },
        success: function(data) {
          console.log(data);
          _this.data = data.data.length > 0 ? data.data : [{
            id: 1,
            name: "能源板块",
            parentid: 0,
            status: 0
          }]
        }
      })
    },
    computed: {
  
    },
    watch: {
  
    },
    methods: {
      /*----下拉列表----*/
      fnc() {
        console.log(this.$refs.clicka)
        if (this.flag) {
          this.$refs.clicka.style.height = '40px';
          this.$refs.clicka.querySelector('h6').querySelector('i').className = 'el-icon-caret-right'
          this.flag = false;
        } else {
  
          this.$refs.clicka.style.height = 'auto';
          this.$refs.clicka.querySelector('h6').querySelector('i').className = 'el-icon-caret-bottom'
          this.flag = true;
        }
      },
      fnc2() {
          this.$refs.clicka.style.height = '40px';
          this.$refs.clicka.querySelector('h6').querySelector('i').className = 'el-icon-caret-right'
          this.flag = false;
        
      },
      /*----刷新路由----*/
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
        var _this=this;
      },
      reload2() {
        this.isRouterAlive2 = false
        this.$nextTick(() => (this.isRouterAlive2 = true))
        var _this=this;
        $.ajax({
          url: `${this.Root}datagovern/classification/findMenu`,
          dataType: "json",
          method: 'POST',
          data: {
            "id": 0,
            "name": "",
            "parentid": "",
            "status": 0
          },
          success: function(data) {
            console.log(data);
            _this.data = data.data.length > 0 ? data.data : [{
              id: 1,
              name: "能源板块",
              parentid: 0,
              status: 0
            }]
          }
        })
      },
      /*----树形菜单加载----*/
      loadNode1(node, resolve) {
        var _this = this;
        console.log(resolve)
        console.log(node)
        this.textVal=node;
        this.functi=resolve;
        if (node.level >=6) {
          return resolve([]);
        };
        setTimeout(() => {
          $.ajax({
            url: `${this.Root}datagovern/classification/findMenu`,
            dataType: "json",
            method: 'POST',
            data: node.data,
            success: function(data) {
              console.log(data);
              resolve(data.data ? data.data : []);
            }
          })
        }, 500);
      },
      heights(){

      },
      /*----树形菜单点击----*/
      handleNodeClick(data) {
        var _this = this;
        if (data.path) {
          this.arr = data.path.split(',') //字符串转数组
        }
  
        if (this.arr.indexOf(data.name) == -1) { //判断是否重复
          this.arr.push(data.name)
        }
  
        if (data.status == 1) { //当状态为1时，跳转到index路由
          console.log(this.arr)
          this.$router.push({
            path: '/Index',
            query: {
              arr: _this.arr,
              data: data
            }
          });
          this.reload()
        } else if (data.status == 2) {
          this.$router.push({
            path: '/Supplier',
            query: {
              arr: _this.arr,
              data: data
            }
          });
          this.reload()
        }
      }
    }
  }
</script>

<style scoped>
  #app .left {
    background: #fff;
    width: 250px;
    min-width: 250px;
    max-width: 400px;
    height: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  
  #app .right {
    flex: 1;
    overflow-y: scroll;
  }
  
  .left ul {
    width: 100%;
    box-sizing: border-box;
    padding: 0 6px;
  }
  
  .left ul li{
    width: 100%;
    height: 40px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .left ul li:first-child{
    width: 100%;
    height: 40px;
  }
  .left ul li h6{
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #4E4E4E;
    box-sizing: border-box;
  }
  .left ul li:last-child{
    padding-left: 14px;
    height: 80px;
  }
  #app .left ul li:last-child p{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 !important;
  }
  .left ul li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #4E4E4E;
    text-decoration: none;
    font-weight: 900;
  }
  .el-tree {
    margin-left: 10px;
    width: 100%;
    min-height: 40px;
  }
  
</style>
