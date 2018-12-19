<template>
    <div id='Details'>
        <div class="bottom">
            <div class="box">
                <h4>基本信息</h4>
                <div class="inbox">
                    <ul>
                        <li>
                            <h5>专业模板</h5>
                            <el-dropdown @command="handleCommand1" >
                                <span class="el-dropdown-link">
                                    {{textVal1}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item  v-for='(item,index) in data' :key='index' :command="item"
                                    >{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>一级业务域</h5>
                            <el-dropdown @command="handleCommand2">
                                <span class="el-dropdown-link">
                                    {{textVal2}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for='(item,index) in data1' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>二级业务域</h5>
                            <el-dropdown @command="handleCommand3">
                                <span class="el-dropdown-link">
                                    {{textVal3}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for='(item,index) in data2' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>三级业务域</h5>
                            <el-dropdown @command="handleCommand4">
                                <span class="el-dropdown-link">
                                    {{textVal4}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for='(item,index) in data3' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>四级业务域</h5>
                            <el-dropdown @command="handleCommand5">
                                <span class="el-dropdown-link">
                                    {{textVal5}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                   <el-dropdown-item v-for='(item,index) in data4' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>数据实体</h5>
                            <input type="text" class='dataentityname' v-model="obj1.dataentityname" >
                        </li>
                        <li>
                            <h5>数据属性名称</h5>
                            <input type="text" class='dataattributename' v-model="obj1.dataattributename">
                        </li>
                        <li>
                            <h5>数据属性类型</h5>
                            <el-dropdown @command="handleCommand6">
                                <span class="el-dropdown-link">
                                    {{textVal6}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="基本属性">基本属性</el-dropdown-item>
                                    <el-dropdown-item command="扩展属性">扩展属性</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
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
                           <textarea name="yewudingyi" id="" class='businessdefinition' cols="30" rows="5" v-model="obj1.businessdefinition"></textarea>
                        </li>
                        <li>
                            <h5>业务规则</h5>
                            <textarea name="yewuguize" id="" class='businessrule' cols="30" rows="5" v-model="obj1.businessrule"></textarea>
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
                            <el-dropdown @command="handleCommand7">
                                <span class="el-dropdown-link">
                                    {{textVal7}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="线上">线上</el-dropdown-item>
                                    <el-dropdown-item command="线下">线下</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>采集频率</h5>
                            <el-dropdown @command="handleCommand8">
                                <span class="el-dropdown-link">
                                    {{textVal8}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="年">年</el-dropdown-item>
                                    <el-dropdown-item command="半年">半年</el-dropdown-item>
                                    <el-dropdown-item command="季度">季度</el-dropdown-item>
                                    <el-dropdown-item command="月">月</el-dropdown-item>
                                    <el-dropdown-item command="周">周</el-dropdown-item>
                                    <el-dropdown-item command="日">日</el-dropdown-item>
                                    <el-dropdown-item command="小时">小时</el-dropdown-item>
                                    <el-dropdown-item command="实时">实时</el-dropdown-item>
                                    <el-dropdown-item command="不定时">不定时</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
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
                            <el-dropdown @command="handleCommand9">
                                <span class="el-dropdown-link">
                                    {{textVal9}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="有条件共享">有条件共享</el-dropdown-item>
                                    <el-dropdown-item command="无条件共享">无条件共享</el-dropdown-item>
                                    <el-dropdown-item command="不共享">不共享</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
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
    export default{
        name:'Details',
        data(){
            return{
                flag:false,
                textVale:"浏览",
                userUploadFile: [],
                data:[],
                data1:[],
                data2:[],
                data3:[],
                data4:[],
                textVal1:'下拉列表',
                textVal2:'下拉列表',
                textVal3:'下拉列表',
                textVal4:'下拉列表',
                textVal5:'下拉列表',
                textVal6:'下拉列表',
                textVal7:'下拉列表',
                textVal8:'下拉列表',
                textVal9:'下拉列表',
                getdat:[],
                obj1:{
                   
                },
                obj:{
                    "businessdefinition": "供应商名称在财务系统中定义",//业务定义
                    "quotedstandard": "《新奥集团供应商信息编码及属性规范》",//引用标准
                    "businessrule": "1、供应商名称唯一，生成后通过修改流程审核后可以变更;2、供应商名称通常为企业法人的营业执照名称，特殊情况下个人也可成为供应商",//业务规则
                    "datarange": "无约束",//数据值域
                    "dataentityname": "数据实体",//实体
                    "acquisitionfrequency": "实时",//采集频率
                    "datatype": "varchar",//数据类型
                    "firstClassificationID": 3,//一级业务域
                    "systemSour": "B",//来源系统
                    "thirdClassificationID": 6,//三级业务域
                    "datasize": "xxxx",//数据s量
                    "dataownername": "管理员",//数据责任人
                    "datalength": 100,//数据长度
                    "fourthClassificationID": 8,//四级业务域
                    "dataattributenameSour": "供应商名称",//来源字段名称
                    "fieldnameEn": "vendor",//英文字段
                    "dataattributetype": "基本属性",//属性类型
                    "professionalPlateID": 1,//专业板块
                    "secondClassificationID": 5,//二级业务域
                    "acquisitiongeometry": "线上",//采集方式
                    "system": "销售管理平台",//所在系统
                    "databasetablename": "BBBBB",//数据表名
                    "departmentname": "廊坊燃气/市场部",//数据所属组织
                    "databasename": "AAAAA",//数据库名
                    "dataattributenameGo": "供应商名称",//去向字段名称
                    "fieldnameCn": "供应商名称",//中文字段
                    "dataattributename": "名称",//属性名称
                    "securityclassification": "无条件共享",//安全等级
                    "systemGo": "A"//去想系统
                }
            }
        },
        mounted() {
            var _this=this;
            $.ajax({
                url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                dataType: "json",
                method: 'GET',
                data: {
                    "parentclassificationid":0
                },
                success: function(data) {
                console.log(data);
                    _this.data=data.data?data.data:[]
                }
            })
            $.ajax({
                url: `${this.Root}datagovern/contentbaseinfo/findDetail`,
                dataType: "json",
                method: 'GET',
                data: {
                    "maintenanceid":_this.$route.query.id
                },
                success: function(data) {
                    console.log(data);
                    _this.obj1=data.data;
                    _this.obj1.maintenanceid=_this.$route.query.id;
                    _this.Assignment(data.data)
                }
            })
        },
        watch:{
            "obj1.dataentityname":function(newVal,oldVal){
                return newVal;
            },
            "obj1.dataattributename":function(newVal,oldVal){
                return newVal;
            },
            "obj1.departmentname":function(newVal,oldVal){
                return newVal;
            },
            "obj1.dataownername":function(newVal,oldVal){
                return newVal;
            },
            "obj1.quotedstandard":function(newVal,oldVal){
                return newVal;
            },
            "obj1.system":function(newVal,oldVal){
                return newVal;
            },
            "obj1.datasize":function(newVal,oldVal){
                return newVal;
            },
            "obj1.databasename":function(newVal,oldVal){
                return newVal;
            },
            "obj1.databasetablename":function(newVal,oldVal){
                return newVal;
            },
            "obj1.fieldnameEn":function(newVal,oldVal){
                return newVal;
            },
            "obj1.fieldnameCn":function(newVal,oldVal){
                return newVal;
            },
            "obj1.datatype":function(newVal,oldVal){
                return newVal;
            },
            "obj1.datalength":function(newVal,oldVal){
                return newVal;
            },
            "obj1.datarange":function(newVal,oldVal){
                return newVal;
            },
            "obj1.systemSour":function(newVal,oldVal){
                return newVal;
            },
            "obj1.dataattributenameSour":function(newVal,oldVal){
                return newVal;
            },
            "obj1.systemGo":function(newVal,oldVal){
                return newVal;
            },
            "obj1.dataattributenameGo":function(newVal,oldVal){
                return newVal;
            },
            "obj1.businessdefinition":function(newVal,oldVal){
                return newVal;
            },
            "obj1.businessrule":function(newVal,oldVal){
                return newVal;
            },
            "obj1.modifydescription":function(newVal,oldVal){
                return newVal;
            },
            "obj1.modifyreason":function(newVal,oldVal){
                return newVal;
            },
        },
        methods:{
            /*----修改后重复值----*/
            getDataAx(datas){
                var _this=this;
                 $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                    dataType: "json",
                    method: 'GET',
                    data: {
                        "parentclassificationid":0
                    },
                    success: function(data) {
                    console.log(data);
                        data.data?data.data.forEach((item,index)=>{
                            if(item.classificationid==datas.professionalPlateID){
                                _this.textVal1=item.classificationname;
                            }
                        }):[]
                        _this.data=data.data?data.data:[]
                    }
                });
                if(datas.firstClassificationID){
                    console.log(datas.firstClassificationID)
                    $.ajax({
                        url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                        dataType: "json",
                        method: 'GET',
                        data:{
                            "parentclassificationid":datas.professionalPlateID
                        },
                        success: function(data) {
                            console.log(data);
                            data.data?data.data.forEach((item,index)=>{
                                if(item.classificationid==datas.firstClassificationID){
                                    _this.textVal2=item.classificationname;
                                }
                            }):[]
                            _this.data1=data.data;
                        }
                    })
                }
                
                if(datas.secondClassificationID){
                    $.ajax({
                        url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                        dataType: "json",
                        method: 'GET',
                        data:{
                            "parentclassificationid":datas.firstClassificationID
                        },
                        success: function(data) {
                            console.log(data);
                            data.data?data.data.forEach((item,index)=>{
                                if(item.classificationid==datas.secondClassificationID){
                                    _this.textVal3=item.classificationname;
                                }
                            }):[]
                            _this.data2=data.data;
                        }
                    })
                }
                
                if(datas.thirdClassificationID){
                    $.ajax({
                        url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                        dataType: "json",
                        method: 'GET',
                        data:{
                            "parentclassificationid":datas.secondClassificationID
                        },
                        success: function(data) {
                            console.log(data);
                            data.data?data.data.forEach((item,index)=>{
                                if(item.classificationid==datas.thirdClassificationID){
                                    _this.textVal4=item.classificationname;
                                }
                            }):[]
                            _this.data3=data.data;
                        }
                    })
                }
                
                if(datas.fourthClassificationID){
                    $.ajax({
                        url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                        dataType: "json",
                        method: 'GET',
                        data:{
                            "parentclassificationid":datas.thirdClassificationID
                        },
                        success: function(data) {
                            console.log(data);
                            data.data?data.data.forEach((item,index)=>{
                                if(item.classificationid==datas.classificationid){
                                    _this.textVal5=item.classificationname;
                                }
                            }):[]
                            _this.data4=data.data;
                        }
                    })
                }
                
            },
            Assignment(data){
                var data=data?data:{}
                this.textVal6=data.dataattributetype;
                this.textVal7=data.acquisitiongeometry;
                this.textVal8=data.acquisitionfrequency;
                this.textVal9=data.datarange;
                this.obj1.dataentityname=data.dataentityname;
                this.obj1.dataattributename=data.dataattributename;
                this.obj1.departmentname=data.departmentname;
                this.obj1.departmentname=data.departmentname;
                this.obj1.dataownername=data.dataownername;
                this.obj1.quotedstandard=data.quotedstandard;
                this.obj1.system=data.system;
                this.obj1.datasize=data.datasize;
                this.obj1.databasename=data.databasename;
                this.obj1.databasetablename=data.databasetablename;
                this.obj1.fieldnameEn=data.fieldnameEn;
                this.obj1.fieldnameCn=data.fieldnameCn;
                this.obj1.datatype=data.datatype;
                this.obj1.datalength=data.datalength;
                this.obj1.datarange=data.datarange;
                this.obj1.systemSour=data.systemSour;
                this.obj1.dataattributenameSour=data.dataattributenameSour;
                this.obj1.systemGo=data.systemGo;
                this.obj1.dataattributenameGo=data.dataattributenameGo;
                this.obj1.businessdefinition=data.businessdefinition;
                this.obj1.businessrule=data.businessrule;
                this.obj1.modifydescription=data.modifydescription;
                this.obj1.modifyreason=data.modifyreason;
                this.getDataAx(data)
            },
            /*----遮罩层----*/
            open(data) {
                var teval='';
                var teval2='';
                if(data.success){
                    teval='成功';
                    teval2='恭喜你，你已经添加成'
                }else{
                    teval='失败'
                    teval2=data.errMsg
                }
                this.$alert(teval2,teval , {
                    confirmButtonText: '确定',
                });
            },
            /*----提交----*/
            Submission(){
                var _this=this;
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/submit`,
                    dataType: "json",
                    method: 'GET',
                    data: _this.obj1,
                    success: function(data) {
                        console.log(data);
                        _this.open(data);
                    }
                })
                this.$router.push('/DataAssetChange')
                console.log(this.obj1)
            },
            /*----保存----*/
            Preservation(){
                var _this=this;
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/create`,
                    dataType: "json",
                    method: 'GET',
                    data: _this.obj1,
                    success: function(data) {
                        console.log(data);
                    }
                })
                this.$router.push('/DataAssetChange')
                console.log(_this.obj1)
            },
            /*----取消----*/
            cancel(){
                this.$router.push('/DataAssetChange')
            },
            /*----数据请求----*/
            getData(obj){
                var obj=obj;
                var data=[];
                var _this=this;
                 $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                    dataType: "json",
                    method: 'GET',
                    data:{
                        "parentclassificationid":obj.classificationid
                    },
                    success: function(data) {
                        console.log(data);
                    }
                })
                console.log(_this.getdat)
                return _this.getdat
            },
            /*----下拉框----*/
            handleCommand1(command) {
                console.log(command);
                var _this=this;
                this.data1=[];
                this.data2=[];
                this.data3=[];
                this.data4=[];
                this.textVal2='下拉列表';
                this.textVal3='下拉列表';
                this.textVal4='下拉列表';
                this.textVal5='下拉列表';
                this.obj1.professionalPlateID=command.classificationid;
                this.textVal1=command.classificationname
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                    dataType: "json",
                    method: 'GET',
                    data:{
                        "parentclassificationid":command.classificationid
                    },
                    success: function(data) {
                        console.log(data);
                        _this.data1=data.data;
                    }
                })

            },
            handleCommand2(command) {
                var _this=this;
                this.data2=[];
                this.data3=[];
                this.data4=[];
                this.textVal3='下拉列表';
                this.textVal4='下拉列表';
                this.textVal5='下拉列表';
                this.textVal2=command.classificationname;
                 this.obj1.firstClassificationID=command.classificationid;
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                    dataType: "json",
                    method: 'GET',
                    data:{
                        "parentclassificationid":command.classificationid
                    },
                    success: function(data) {
                        console.log(data);
                        _this.data2=data.data;
                    }
                })
            },
            handleCommand3(command) {

                var _this=this;
                this.data3=[];
                this.data4=[];
                this.textVal4='下拉列表';
                this.textVal5='下拉列表';
                this.textVal3=command.classificationname
                this.obj1.secondClassificationID=command.classificationid;
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                    dataType: "json",
                    method: 'GET',
                    data:{
                        "parentclassificationid":command.classificationid
                    },
                    success: function(data) {
                        console.log(data);
                        _this.data3=data.data;
                    }
                })
            },
            handleCommand4(command) {
                var _this=this;
                this.data4=[];
                this.textVal5='下拉列表';
                this.textVal4=command.classificationname;
                this.obj1.thirdClassificationID=command.classificationid;
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                    dataType: "json",
                    method: 'GET',
                    data:{
                        "parentclassificationid":command.classificationid
                    },
                    success: function(data) {
                        console.log(data);
                        _this.data4=data.data;
                        
                    }
                })
            },
            handleCommand5(command) {
                this.textVal5=command.classificationname;
                this.obj1.fourthClassificationID=command.classificationid;
            },
            handleCommand6(command) {
                this.textVal6=command;
                this.obj1.dataattributetype=command;
            },
            handleCommand7(command) {
                this.textVal7=command;
                this.obj1.acquisitiongeometry=command;
            },
            handleCommand8(command) {
                this.textVal8=command;
                this.obj1.acquisitionfrequency=command;
            },
            handleCommand9(command) {
                this.textVal9=command;
                this.obj1.securityclassification=command;
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
  .el-dropdown-menu{
        width: 20%;
    }
</style>

