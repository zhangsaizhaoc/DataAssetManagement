<template>
  <div id="DataDistributionFlow" style=' overflow-y:auto;height: auto;'>
        <div class="left">
            <h5>来源系统</h5>
            <div class="main">
                <h6></h6>
                <p v-for='(item,index) in data2.list' :key='index' v-if='item.dataattributenameSour'>
                    {{item.dataattributenameSour}}
                    <span>{{item.systemSour}}</span>
                    
                </p>
                <p style='height: 47px;border:0;background:none' v-for='(item,index) in data2.list' :key='index' v-if='!item.dataattributenameSour'></p>
            </div>
        </div>
        <div class="center">
            <h5>实体数据</h5>
            <div class="main">
                <h6><span>{{data2.dataentityname}}</span></h6>
                <p v-for='(item,index) in data2.list' :key='index' v-if='item.dataattributenameSour||item.dataattributenameGo'>
                    <b></b>
                    {{item.dataattributename}}
                    <span>{{item.system}}</span>
                </p>
            </div>
        </div>
        <div class="right">
            <h5>去向系统</h5>
            <div class="main">
            <h6></h6>
                <p v-for='(item,index) in data2.list' :key='index' v-if='item.dataattributenameGo'>
                    {{item.dataattributenameGo}}
                    <span>{{item.systemGo}}</span>
                </p>
                <p style='height: 47px;border:0;background:none' v-for='(item,index) in data2.list' :key='index' v-if='!item.dataattributenameGo'></p>
            </div>
        </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'DataDistributionFlow',
    data() {
      return {
        data2:{},
      }
    },
    mounted() {
        var _this = this;
        console.log(this.$route.query.data)
        $.ajax({
            url: `${this.Root}datagovern/contentbaseinfo/findFlowTo`,
            dataType: "json",
            method: 'GET',
            data: {
              "classificationid":this.$route.query.data.parentid,
              "dataentityname": this.$route.query.data.name
            },
            success: function(data) {
                console.log(data); 
                _this.data2=data.data;
            },
            error:function(error){
                console.log(error)
            }
        })

    },
    computed:{

    },
    watch:{
      
    },
    methods: {
       
    }
  }
</script>

<style scoped>
  @import './DataDistributionFlow.style.css';
</style>
