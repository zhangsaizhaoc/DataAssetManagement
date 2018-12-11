<template>
  <div id="VersionInformation">
        <ul>
            <li>
                <span>所属数据实体</span>
                <span>{{data.dataentityname}}</span>
            </li>
            <li>
                <span>属性名称</span>
                <span>{{data.dataattributename}}</span>
            </li>
            <li>
                <span>所在系统</span>
                <span>{{data.system}}</span>
                <span>数据量</span>
                <span>{{data.datasize}}</span>
            </li>
            <li>
                <span>数据库名</span>
                <span>{{data.databasename}}</span>
                <span>数据表名</span>
                <span>{{data.databasetablename}}</span>
            </li>
            <li>
                <span>英文名</span>
                <span>{{data.fieldnameEn}}</span>
                <span>中文名</span>
                <span>{{data.fieldnameCn}}</span>
            </li>
            <li>
                <span>字段类型</span>
                <span>{{data.datatype}}</span>
                <span>字段长度</span>
                <span>{{data.datalength}}</span>
            </li>
            <li>
                <span>值域</span>
                <span>{{data.datarange}}</span>
                <span>安全等级</span>
                <span>{{data.securityclassification}}</span>
            </li>
            <li>
                <span>来源系统</span>
                <span>{{data.systemSour}}</span>
                <span>来源字段名称</span>
                <span>{{data.dataattributenameSour}}</span>
            </li>
            <li>
                <span>去向系统</span>
                <span>{{data.systemGo}}</span>
                <span>去向字段名称</span>
                <span>{{data.dataattributenameGo}}</span>
            </li>
            
        </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'VersionInformation',
    data() {
      return {
        data:[],
      }
    },
    mounted() {
        var _this = this;
        $.ajax({
            url: "/datagovern/contentbaseinfo/findTechAttr",
            dataType: "json",
            method: 'GET',
            data: {
              "maintenanceid":this.$route.query.data.id
            },
            success: function(data) {
                console.log(data); 
                _this.data=data.data?data.data:{
                    maintenanceversion: "-",
                    modifydescription: "-",
                    modifyid:'-',
                    modifyreason: "-",
                    operationtime: "-",
                    operator: "-",
                }
                
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
  #VersionInformation{
    width:100%;
    height:100%;
    box-sizing: border-box
  }
  #VersionInformation ul{
    width:100%;
    height:100%;
    background:#fff;
    box-sizing: border-box;
    border:solid 1px #E3E7F1;
  }
  #VersionInformation ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height:34px;
    border-bottom:solid 1px #E3E7F1;
  }
  #VersionInformation ul li:last-child{
      border:0;
  }
  #VersionInformation ul li span{
    color:#778199;
    font-size:14px;
  }
  #VersionInformation ul li span:first-child,#VersionInformation ul li span:nth-child(3){
    width:120px;
    padding-left:20px;
    box-sizing: border-box
  }
  #VersionInformation ul li span:nth-child(2n){
      flex:1
  }
   #VersionInformation ul li span:last-child{
       flex:1;
   }
   #VersionInformation ul li:nth-child(2n){
        background:#FCFCFC;
   }
</style>
