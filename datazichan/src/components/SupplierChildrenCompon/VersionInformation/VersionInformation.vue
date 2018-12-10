<template>
  <div id="VersionInformation">
    技术
        <!--<ul>
            <li>
                <span>版本号</span>
                <span>{{data.maintenanceversion}}</span>
            </li>
            <li>
                <span>创建\变更时间</span>
                <span>{{data.operationtime}}</span>
            </li>
            <li>
                <span>创建\变更人</span>
                <span>{{data.operator}}</span>
            </li>
            <li>
                <span>变更内容描述</span>
                <span>{{data.modifydescription}}</span>
            </li>
            <li>
                <span>变更原因说明</span>
                <span>{{data.modifyreason}}</span>
            </li>
        </ul>-->
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
  #VersionInformation ul li span:first-child{
    width:120px;
    padding-left:20px;
    box-sizing: border-box
  }
   #VersionInformation ul li span:last-child{
       flex:1;
   }
   #VersionInformation ul li:nth-child(2n){
        background:#FCFCFC;
   }
</style>
