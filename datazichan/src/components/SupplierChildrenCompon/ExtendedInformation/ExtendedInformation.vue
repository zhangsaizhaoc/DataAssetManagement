<template>
  <div id="ExtendedInformation">
        <ul>
            <li>
                <span>所属数据实体</span>
                <span>{{data.acquisitionfrequency}}</span>
            </li>
            <li>
                <span>属性名称</span>
                <span>{{data.dataattributename}}</span>
            </li>
            <li>
                <span>数据所属组织/部门</span>
                <span>{{data.departmentname}}</span>
            </li>
            <li>
                <span>数据责任人（岗位/人员）</span>
                <span>{{data.dataownername}}</span>
            </li>
            <li>
                <span>引用标准</span>
                <span>{{data.quotedstandard}}</span>
            </li>
            <li>
                <span>采集方式</span>
                <span>{{data.acquisitiongeometry}}</span>
            </li>
            <li>
                <span>采集频率</span>
                <span>{{data.acquisitionfrequency}}</span>
            </li>
        </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'ExtendedInformation',
    data() {
      return {
        data:{},
      }
    },
    mounted() {
        var _this = this;
        $.ajax({
            url: "/datagovern/contentbaseinfo/findManageAttr",
            dataType: "json",
            method: 'GET',
            data: {
              "maintenanceid":this.$route.query.data.id
            },
            success: function(data) {
                console.log(data); 
                _this.data=data.data?data.data:{
                  acquisitionfrequency: "--",
                  acquisitiongeometry: "--",
                  dataattributename: "--",
                  dataentityname: "--",
                  dataownername: "--",
                  departmentname: "--",
                  quotedstandard: "--"
                };
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
  #ExtendedInformation{
    width:100%;
    height:100%;
    box-sizing: border-box
  }
  #ExtendedInformation ul{
    width:100%;
    height:100%;
    background:#fff;
    box-sizing: border-box;
    border:solid 1px #E3E7F1;
  }
  #ExtendedInformation ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height:34px;
    border-bottom:solid 1px #E3E7F1;
  }
  #ExtendedInformation ul li:last-child{
      border:0;
  }
  #ExtendedInformation ul li span{
    color:#778199;
    font-size:14px;
  }
  #ExtendedInformation ul li span:first-child{
    width:120px;
    padding-left:20px;
    box-sizing: border-box
  }
   #ExtendedInformation ul li span:last-child{
       flex:1;
   }
   #ExtendedInformation ul li:nth-child(2n){
        background:#FCFCFC;
   }
</style>
