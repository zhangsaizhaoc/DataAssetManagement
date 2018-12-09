<template>
  <div id="BasicInformation">
        <ul>
            <li v-for='(item,index) in data2' :key=''index>
                <span>{{item.dataattributename}}</span>
                <span>{{item.datatype}}（{{item.datalength}}）</span>
            </li>
        </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'BasicInformation',
    data() {
      return {
        data2:[],
      }
    },
    mounted() {
        var _this = this;
        console.log(this.$route.query.data)
        $.ajax({
            url: "/datagovern/contentbaseinfo/findInfo",
            dataType: "json",
            method: 'GET',
            data: {
              "classificationid":"5",
              "dataentityname": "数据实体",
              "dataattributetype": "基本属性"
            },
            success: function(data) {
                console.log(data); 
                _this.data2=data.data.length>0?data.data:[];
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
  #BasicInformation{
    width:100%;
    height:100%;
    box-sizing: border-box
  }
  #BasicInformation ul{
    width:100%;
    height:100%;
    background:#fff;
    box-sizing: border-box;
    border:solid 1px #E3E7F1;
  }
  #BasicInformation ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height:34px;
    border-bottom:solid 1px #E3E7F1;
  }
  #BasicInformation ul li:last-child{
      border:0;
  }
  #BasicInformation ul li span{
    color:#778199;
    font-size:14px;
  }
  #BasicInformation ul li span:first-child{
    width:120px;
    padding-left:20px;
    box-sizing: border-box
  }
   #BasicInformation ul li span:last-child{
       flex:1;
   }
   #BasicInformation ul li:nth-child(2n){
        background:#FCFCFC;
   }
</style>
