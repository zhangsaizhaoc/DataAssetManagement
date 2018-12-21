<template>
  <div id="ExtendedInformation">
  
    <ul>
  
      <li v-for='(item,index) in data' :key='index'>
  
        <span>{{item.dataattributename}}</span>
  
        <span>{{item.datatype}}（{{item.datalength}}）</span>
  
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
  
        data: [],
  
      }
  
    },
  
    mounted() {
  
      var _this = this;
  
      $.ajax({
  
        url: `${this.Root}datagovern/contentbaseinfo/findInfo`,
  
        dataType: "json",
  
        method: 'POST',
  
        data: {  
  
          "classificationid": this.$route.query.data.parentid,
  
            "dataentityname": this.$route.query.data.name,
  
            "dataattributetype": "扩展属性"
  
        },
  
        success: function(data) {
  
          console.log(data);
  
          _this.data = data.data.length > 0 ? data.data : [];
  
        }
  
      })
  
  
  
    },
  
    computed: {
  
  
  
    },
  
    watch: {
  
  
  
    },
  
    methods: {
  
  
  
    }
  
  }
</script>

<style scoped>
  #ExtendedInformation {
  
    width: 100%;
  
    height: 100%;
  
    box-sizing: border-box
  
  }
  
  
  
  #ExtendedInformation ul {
  
    width: 100%;
  
    height: 100%;
  
    background: #fff;
  
    box-sizing: border-box;
  
    border: solid 1px #E3E7F1;
  
  }
  
  
  
  #ExtendedInformation ul li {
  
    display: flex;
  
    justify-content: space-between;
  
    align-items: center;
  
    line-height: 34px;
  
    border-bottom: solid 1px #E3E7F1;
  
  }
  
  
  
  #ExtendedInformation ul li:last-child {
  
    border: 0;
  
  }
  
  
  
  #ExtendedInformation ul li span {
  
    color: #778199;
  
    font-size: 14px;
  
  }
  #ExtendedInformation ul li span:first-child {
    width: 220px;
    padding-left: 20px;
    text-align: center;
    box-sizing: border-box
  
  }
  #ExtendedInformation ul li span:last-child {
    flex: 1;
  }
  #ExtendedInformation ul li:nth-child(2n) {
    background: #FCFCFC;
  }
</style>
