<template>
  <div id='Details'>
    <div class="top">
      <h5>数据详情</h5>
       <h6>
          <span @click='returnsa'>返回</span>
      </h6>
    </div>
    <div class="bottom">
      <div class="box">
        <h4>基本信息</h4>
        <div class="inbox">
          <ul>
            <li>
              <h5>专业模板</h5>
              <input type="text" v-model="textVal1">
            </li>
            <li>
              <h5>一级业务域</h5>
              <input type="text" v-model="textVal2">
            </li>
            <li>
              <h5>二级业务域</h5>
              <input type="text" v-model="textVal3">
            </li>
  
            <li>
  
              <h5>三级业务域</h5>
  
              <input type="text" v-model="textVal4">
  
            </li>
  
            <li>
  
              <h5>四级业务域</h5>
  
              <input type="text" v-model="textVal5">
  
            </li>
  
            <li>
  
              <h5>数据实体</h5>
  
              <input type="text" class='dataentityname' v-model="obj1.dataentityname">
  
            </li>
  
            <li>
  
              <h5>数据属性名称</h5>
  
              <input type="text" class='dataattributename' v-model="obj1.dataattributename">
  
            </li>
  
            <li>
  
              <h5>数据属性类型</h5>
  
              <input type="text" v-model="textVal6">
  
            </li>
  
            <li></li>
  
          </ul>
  
        </div>
  
      </div>
  
      <div class="box">
  
        <h4>业务信息</h4>
  
        <div class="inbox">
  
          <ul>
  
            <li>
  
              <h5>业务定义</h5>
  
              <textarea name="yewudingyi" id="" class='businessdefinition' cols="30" rows="5" v-model="obj1.businessdefinition" disabled></textarea>
  
            </li>
  
            <li>
  
              <h5>业务规则</h5>
  
              <textarea name="yewuguize" id="" class='businessrule' cols="30" rows="5" v-model="obj1.businessrule" disabled></textarea>
  
            </li>
  
          </ul>
  
        </div>
  
      </div>
  
      <div class="box">
  
        <h4>管理信息</h4>
  
        <div class="inbox">
  
          <ul>
  
            <li>
  
              <h5>数据所属组织部门</h5>
  
              <input type="text" class='departmentname' v-model="obj1.departmentname">
  
            </li>
  
            <li>
  
              <h5>数据负责人</h5>
  
              <input type="text" class='dataownername' v-model="obj1.dataownername">
  
            </li>
  
            <li>
  
              <h5>引用标准</h5>
  
              <input type="text" class='quotedstandard' v-model="obj1.quotedstandard">
  
            </li>
  
            <li>
  
              <h5>采集方式</h5>
  
              <input type="text" v-model="textVal7">
  
            </li>
  
            <li>
  
              <h5>采集频率</h5>
  
              <input type="text" v-model="textVal8">
  
            </li>
  
            <li></li>
  
          </ul>
  
        </div>
  
      </div>
  
      <div class="box boxim">
  
        <h4>技术信息</h4>
  
        <div class="inbox">
  
          <ul>
  
            <li>
  
              <h5>所在系统</h5>
  
              <input type="text" class='system' v-model="obj1.system">
  
            </li>
  
            <li>
  
              <h5>数据量</h5>
  
              <input type="text" class='datasize' v-model="obj1.datasize">
  
            </li>
  
            <li>
  
              <h5>数据库名</h5>
  
              <input type="text" class='databasename' v-model="obj1.databasename">
  
            </li>
  
            <li>
  
              <h5>数据表名</h5>
  
              <input type="text" class='databasetablename' v-model="obj1.databasetablename">
  
            </li>
  
            <li>
  
              <h5>字段英文名</h5>
  
              <input type="text" class='fieldnameEn' v-model="obj1.fieldnameEn">
  
            </li>
  
            <li>
  
              <h5>字段中文名</h5>
  
              <input type="text" class="fieldnameCn" v-model="obj1.fieldnameCn">
  
            </li>
  
            <li>
  
              <h5>数据类型</h5>
  
              <input type="text" class='datatype' v-model="obj1.datatype">
  
            </li>
  
            <li>
  
              <h5>数据长度</h5>
  
              <input type="text" class='datalength' v-model="obj1.datalength">
  
            </li>
  
            <li>
  
              <h5>数据值域</h5>
  
              <input type="text" class='datarange' v-model="obj1.datarange">
  
            </li>
  
            <li>
  
              <h5>来源系统</h5>
  
              <input type="text" class='systemSour' v-model="obj1.systemSour">
  
            </li>
  
            <li>
  
              <h5>来源字段名</h5>
  
              <input type="text" class='dataattributenameSour' v-model="obj1.dataattributenameSour">
  
            </li>
  
            <li>
  
              <h5>去向系统</h5>
  
              <input type="text" class='systemGo' v-model="obj1.systemGo">
  
            </li>
  
            <li>
  
              <h5>去向字段名</h5>
  
              <input type="text" class='dataattributenameGo' v-model="obj1.dataattributenameGo">
  
            </li>
  
            <li>
  
              <h5>数据安全等级</h5>
  
              <input type="text" v-model="textVal9">
  
            </li>
  
            <li></li>
  
            <li></li>
  
          </ul>
  
        </div>
  
  
  
      </div>
  
    </div>
  
  </div>
</template>
<script>
  import $ from 'jquery'
  
  export default {
  
    name: 'Details',
  
    data() {
  
      return {
  
        flag: false,
  
        textVale: "浏览",
  
        userUploadFile: [],
  
        data: [],
  
        data1: [],
  
        data2: [],
  
        data3: [],
  
        data4: [],
  
        textVal1: '下拉列表',
  
        textVal2: '下拉列表',
  
        textVal3: '下拉列表',
  
        textVal4: '下拉列表',
  
        textVal5: '下拉列表',
  
        textVal6: '下拉列表',
  
        textVal7: '下拉列表',
  
        textVal8: '下拉列表',
        textVal9: '下拉列表',
        getdat: [],
        obj1: {
        },
        obj: {
          "businessdefinition": "供应商名称在财务系统中定义", //业务定义
          "quotedstandard": "《新奥集团供应商信息编码及属性规范》", //引用标准
          "businessrule": "1、供应商名称唯一，生成后通过修改流程审核后可以变更;2、供应商名称通常为企业法人的营业执照名称，特殊情况下个人也可成为供应商", //业务规则
          "datarange": "无约束", //数据值域
          "dataentityname": "数据实体", //实体
          "acquisitionfrequency": "实时", //采集频率
          "datatype": "varchar", //数据类型
          "firstClassificationID": 3, //一级业务域
          "systemSour": "B", //来源系统
          "thirdClassificationID": 6, //三级业务域
          "datasize": "xxxx", //数据s量
          "dataownername": "管理员", //数据责任人
          "datalength": 100, //数据长度
          "fourthClassificationID": 8, //四级业务域
          "dataattributenameSour": "供应商名称", //来源字段名称
          "fieldnameEn": "vendor", //英文字段
          "dataattributetype": "基本属性", //属性类型
          "professionalPlateID": 1, //专业板块
          "secondClassificationID": 5, //二级业务域
          "acquisitiongeometry": "线上", //采集方式
          "system": "销售管理平台", //所在系统
          "databasetablename": "BBBBB", //数据表名
          "departmentname": "廊坊燃气/市场部", //数据所属组织
          "databasename": "AAAAA", //数据库名
          "dataattributenameGo": "供应商名称", //去向字段名称
          "fieldnameCn": "供应商名称", //中文字段
          "dataattributename": "名称", //属性名称
          "securityclassification": "无条件共享", //安全等级
          "systemGo": "A" //去想系统
        }
      }
    },
    mounted() {
      var _this = this;
      $.ajax({
        url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
        dataType: "json",
        method: 'POST',
        data: {
          "parentclassificationid": 0
        },
        success: function(data) {
          console.log(data);
          _this.data = data.data ? data.data : []
        }
      })
      $.ajax({
        url: `${this.Root}datagovern/contentbaseinfo/findDetail`,
        dataType: "json",
        method: 'POST',
        data: {
          "maintenanceid": _this.$route.query.id
        },
        success: function(data) {
          console.log(data);
          _this.obj1 = data.data;
          _this.obj1.maintenanceid = _this.$route.query.id;
          _this.Assignment(data.data)
        }
      })
      this.dis();
    },
  
  
  
    methods: {
      /*----返回----*/
      returnsa(){
        this.$router.push('/DataAssetChange')
      },
      /*----禁用所用input----*/
      dis() {
  
        var inp = $('input');
  
        for (var i = 0; i < inp.length; i++) {
  
          inp[i].disabled = 'disabled'
  
        }
  
      },
  
      /*----修改后重复值----*/
  
      getDataAx(datas) {
  
        var _this = this;
  
        $.ajax({
  
          url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
  
          dataType: "json",
  
          method: 'POST',
  
          data: {
  
            "parentclassificationid": 0
  
          },
  
          success: function(data) {
  
            console.log(data);
  
            data.data ? data.data.forEach((item, index) => {
  
              if (item.classificationid == datas.professionalPlateID) {
  
                _this.textVal1 = item.classificationname;
  
              }
  
            }) : []
  
            _this.data = data.data ? data.data : []
  
          }
  
        });
  
        if (datas.firstClassificationID) {
  
          console.log(datas.firstClassificationID)
  
          $.ajax({
  
            url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
  
            dataType: "json",
  
            method: 'POST',
  
            data: {
  
              "parentclassificationid": datas.professionalPlateID
  
            },
  
            success: function(data) {
  
              console.log(data);
  
              data.data ? data.data.forEach((item, index) => {
  
                if (item.classificationid == datas.firstClassificationID) {
  
                  _this.textVal2 = item.classificationname;
  
                }
  
              }) : []
              _this.data1 = data.data;
            }
          })
        }
        if (datas.secondClassificationID) {
  
          $.ajax({
  
            url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
  
            dataType: "json",
  
            method: 'POST',
  
            data: {
  
              "parentclassificationid": datas.firstClassificationID
  
            },
  
            success: function(data) {
  
              console.log(data);
  
              data.data ? data.data.forEach((item, index) => {
  
                if (item.classificationid == datas.secondClassificationID) {
  
                  _this.textVal3 = item.classificationname;
  
                }
  
              }) : []
  
              _this.data2 = data.data;
  
            }
  
          })
  
        }
  
  
  
        if (datas.thirdClassificationID) {
  
          $.ajax({
  
            url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
  
            dataType: "json",
  
            method: 'POST',
  
            data: {
  
              "parentclassificationid": datas.secondClassificationID
  
            },
  
            success: function(data) {
  
              console.log(data);
  
              data.data ? data.data.forEach((item, index) => {
  
                if (item.classificationid == datas.thirdClassificationID) {
  
                  _this.textVal4 = item.classificationname;
  
                }
  
              }) : []
  
              _this.data3 = data.data;
  
            }
  
          })
  
        }
  
  
  
        if (datas.fourthClassificationID) {
  
          $.ajax({
  
            url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
  
            dataType: "json",
  
            method: 'POST',
  
            data: {
  
              "parentclassificationid": datas.thirdClassificationID
  
            },
  
            success: function(data) {
  
              console.log(data);
  
              data.data ? data.data.forEach((item, index) => {
  
                if (item.classificationid == datas.classificationid) {
  
                  _this.textVal5 = item.classificationname;
  
                }
  
              }) : []
  
              _this.data4 = data.data;
  
            }
  
          })
  
        }
  
  
  
      },
  
      Assignment(data) {
  
        var data = data ? data : {}
  
        this.textVal6 = data.dataattributetype;
  
        this.textVal7 = data.acquisitiongeometry;
  
        this.textVal8 = data.acquisitionfrequency;
  
        this.textVal9 = data.securityclassification;
  
        this.obj1.dataentityname = data.dataentityname;
  
        this.obj1.dataattributename = data.dataattributename;
  
        this.obj1.departmentname = data.departmentname;
  
        this.obj1.departmentname = data.departmentname;
  
        this.obj1.dataownername = data.dataownername;
  
        this.obj1.quotedstandard = data.quotedstandard;
  
        this.obj1.system = data.system;
  
        this.obj1.datasize = data.datasize;
  
        this.obj1.databasename = data.databasename;
  
        this.obj1.databasetablename = data.databasetablename;
  
        this.obj1.fieldnameEn = data.fieldnameEn;
  
        this.obj1.fieldnameCn = data.fieldnameCn;
  
        this.obj1.datatype = data.datatype;
  
        this.obj1.datalength = data.datalength;
  
        this.obj1.datarange = data.datarange;
  
        this.obj1.systemSour = data.systemSour;
  
        this.obj1.dataattributenameSour = data.dataattributenameSour;
  
        this.obj1.systemGo = data.systemGo;
  
        this.obj1.dataattributenameGo = data.dataattributenameGo;
  
        this.obj1.businessdefinition = data.businessdefinition;
  
        this.obj1.businessrule = data.businessrule;
  
        this.obj1.modifydescription = data.modifydescription;
  
        this.obj1.modifyreason = data.modifyreason;
  
        this.getDataAx(data)
  
      },
  
  
  
      /*----数据请求----*/
  
      getData(obj) {
  
        var obj = obj;
  
        var data = [];
  
        var _this = this;
  
        $.ajax({
  
          url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
  
          dataType: "json",
  
          method: 'POST',
  
          data: {
  
            "parentclassificationid": obj.classificationid
  
          },
  
          success: function(data) {
  
            console.log(data);
  
          }
  
        })
  
        console.log(_this.getdat)
  
        return _this.getdat
  
      },
  
    }
  
  }
</script>
<style scoped>
  @import './Details.style.css';
  
  .el-dropdown-link {
  
    cursor: pointer;
  
    color: #778199;
  
    font-size: 12px;
  
  }
  
  
  
  .el-icon-arrow-down {
  
    font-size: 12px;
  
  }
  
  
  
  .el-dropdown-menu {
  
    width: 20%;
  
  }
</style>

