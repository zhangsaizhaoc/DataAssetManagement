<template>
    <div id='AssetContentCreation'>
        <div class="top">
            <h5>创建</h5>
            <h6>
                <span>单条创建</span>
                <span @click='BatchImport'>批量导入</span>
            </h6>
        </div>
        <div class="bottom">
            <div class="box">
                <h4>
                    基本信息
                </h4>
                <div class="inbox">
                    <ul>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                专业模板
                            </h5>
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
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                一级业务域
                            </h5>
                            <el-dropdown @command="handleCommand2">
                                <span class="el-dropdown-link" @click="warning1">
                                    {{textVal2}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for='(item,index) in data1' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                二级业务域
                            </h5>
                            <el-dropdown @command="handleCommand3">
                                <span class="el-dropdown-link" @click="warning2">
                                    {{textVal3}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for='(item,index) in data2' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true" v-if='data3.length'>
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                三级业务域</h5>
                            <el-dropdown @command="handleCommand4">
                                <span class="el-dropdown-link" @click="warning3">
                                    {{textVal4}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for='(item,index) in data3' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true" v-if='data4.length'>
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                四级业务域</h5>
                            <el-dropdown @command="handleCommand5" >
                                <span class="el-dropdown-link" @click="warning4">
                                    {{textVal5}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                   <el-dropdown-item v-for='(item,index) in data4' :key='index' :command="item">{{item.classificationname}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据实体
                            </h5>
                            <input type="text" class='dataentityname' >
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据属性名称
                            </h5>
                            <input type="text" class='dataattributename'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据属性类型
                            </h5>
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
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                业务定义
                            </h5>
                           <textarea name="yewudingyi" id=""  ref='businessde' width='100%' class='businessdefinition' cols="20" rows="5" v-model="yewudyval" @keyup="WordLimit1"></textarea>
                           <p ref="businessdefinition">限制500字，您还可以输入 <span>{{yewudynum}}</span> 字</p>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                业务规则
                            </h5>
                            <textarea name="yewuguize" id="" width='100%' class='businessrule' cols="20" rows="5" v-model="yewugzval" @keyup="WordLimit2"></textarea>
                            <p ref='businessrule'>限制500字，您还可以输入 <span>{{yewugznum}}</span> 字</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box">
                <h4>管理信息</h4>
                <div class="inbox">
                    <ul>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据所属组织部门
                            </h5>
                            <input type="text" class='departmentname'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据负责人
                            </h5>
                            <input type="text" class='dataownername'>
                        </li>
                        <li>
                            <h5>引用标准</h5>
                            <input type="text" class='quotedstandard'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                采集方式</h5>
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
            <div class="box">
                <h4>技术信息</h4>
                <div class="inbox">
                    <ul>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                所在系统</h5>
                            <input type="text" class='system'>
                        </li>
                        <li>
                            <h5>数据量</h5>
                            <input type="text" class='datasize'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据库名</h5>
                            <input type="text" class='databasename'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据表名</h5>
                            <input type="text" class='databasetablename'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                字段英文名</h5>
                            <input type="text" class='fieldnameEn'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                字段中文名</h5>
                            <input type="text" class="fieldnameCn">
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据类型</h5>
                            <input type="text" class='datatype'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据长度</h5>
                            <input type="text" class='datalength'>
                        </li>
                        <li>
                            <h5>数据值域</h5>
                            <input type="text" class='datarange'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                来源系统</h5>
                            <input type="text" class='systemSour'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                来源字段名</h5>
                            <input type="text" class='dataattributenameSour'>
                        </li>
                        <li>
                            <h5>去向系统</h5>
                            <input type="text" class='systemGo'>
                        </li>
                        <li>
                            <h5>去向字段名</h5>
                            <input type="text" class='dataattributenameGo'>
                        </li>
                        <li>
                            <h5>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yuanhuan"></use>
                                </svg>
                                数据安全等级</h5>
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
            <div class="btns">
                <button @click="Submission">提交</button>
                <button @click="Preservation">保存</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
        <div class="mask" v-if='flag' @click='BatchImport' >
           <div class="upload">
               <h6>批量导入</h6>
                <p>选择文件</p>
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    :action="this.Root+'management/security/importexcel/uploadExcel'"
                    :on-preview="handlePreview"
                    :on-change="handleChange"
                    :on-remove="handleRemove"
                    :on-success='handleSuccess'
                    :on-error='handleError'
                    :file-list="userUploadFile"
                    :auto-upload="false"
                    :beforeUpload="beforeAvatarUpload"
                >
                    <el-button slot="trigger" size="small" type="primary" >{{textVale}}</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">导入</el-button>
                </el-upload>
                <div class="download">
                    <a :href="this.Root+'template/exporTemplate.xlsx'">模板下载</a>
                </div>
                <ol class='list'>
                    <li>模板要求及说明</li>
                    <li>1、模板必须符合要求</li>
                    <li>2、不能超过5M</li>
                    <li>3、说明</li>
                    <li>4、如何</li>
                </ol>
           </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default{
        name:'AssetContentCreation',
        data(){
            return{
                flag:false,
                textVale:"浏览",
                userUploadFile: [],
                yewudynum:500,
                yewudyval:'',
                yewugznum:500,
                yewugzval:'',
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
                obj:{
                    "businessdefinition": "供应商名称在财务系统中定义",//业务定义
                    "quotedstandard": "《新奥集团供应商信息编码及属性规范》",//引用标准
                    "businessrule": "1、供应商名称唯一，生成后通过修改流程审核后可以变更;2、供应商名称通常为企业法人的营业执照名称，特殊情况下个人也可成为供应商",//业务规则
                    "datarange": "无约束",//数据值域
                    "dataentityname": "数据实体",//实体
                    "acquisitionfrequency": "实时",//采集频率
                    "datatype": "varchar",//数据类型
                    "firstClassificationID": '',//一级业务域
                    "systemSour": "B",//来源系统
                    "thirdClassificationID": '',//三级业务域
                    "datasize": "xxxx",//数据量
                    "dataownername": "管理员",//数据责任人
                    "datalength": 100,//数据长度
                    "fourthClassificationID":'',//四级业务域
                    "dataattributenameSour": "供应商名称",//来源字段名称
                    "fieldnameEn": "vendor",//英文字段
                    "dataattributetype": "基本属性",//属性类型
                    "professionalPlateID": '',//专业板块
                    "secondClassificationID": '',//二级业务域
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
        },
        methods:{
            WordLimit1(){
                this.yewudynum=500-this.yewudyval.length;
                var textval=''
                if(this.yewudynum>0&&this.yewudynum<=500){
                    // this.$refs.businessde.disabled=true;
                    textval=this.yewudyval;
                    this.$refs.businessdefinition.querySelector('span').style.color='rgb(27, 248, 7)';
                }else{
                    this.yewudynum=0;
                    this.yewudyval=this.yewudyval.substr(0,501);
                    this.$refs.businessdefinition.querySelector('span').style.color='#f00';
                }
            },
            WordLimit2(){
                this.yewugznum=500-this.yewugzval.length;
                if(this.yewugznum>0&&this.yewugznum<=500){
                    // this.$refs.businessde.disabled=true;
                    this.$refs.businessrule.querySelector('span').style.color='rgb(27, 248, 7)';
                }else{
                    this.yewugznum=0;
                    this.yewugzval=this.yewugzval.substr(0,501);
                    this.$refs.businessrule.querySelector('span').style.color='#f00';
                }
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
                var inp=$('.box input');
                var _this=this;
                var itexta=$('.box textarea');
                for(var i=0;i<inp.length;i++){
                    this.obj[inp[i].className]=inp[i].value;
                }
                for(var i=0;i<itexta.length;i++){
                    this.obj[itexta[i].className]=itexta[i].value;
                }
                console.log(_this.obj)
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/submit`,
                    dataType: "json",
                    method: 'GET',
                    data: _this.obj,
                    success: function(data) {
                        console.log(data);
                        _this.open(data);
                        if(data.success){
                            _this.$router.push('/DataAssetChange')
                        } 
                    }
                })
                console.log(this.obj)
            },
            /*----保存----*/
            Preservation(){
                var inp=$('.box input');
                var itexta=$('.box textarea');
                var _this=this;
                console.log('--------保存-------')
                for(var i=0;i<inp.length;i++){
                    this.obj[inp[i].className]=inp[i].value;
                }
                for(var i=0;i<itexta.length;i++){
                    this.obj[itexta[i].className]=itexta[i].value;
                }
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/create`,
                    dataType: "json",
                    method: 'GET',
                    data: _this.obj,
                    success: function(data) {
                        console.log(data);
                    }
                })
                this.$router.push('/DataAssetChange')
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
                this.obj.professionalPlateID=command.classificationid;
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
                 this.obj.firstClassificationID=command.classificationid;
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
                this.obj.secondClassificationID=command.classificationid;
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
                this.textVal4=command.classificationname
                this.obj.thirdClassificationID=command.classificationid;
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
                console.log(command)
                this.obj.fourthClassificationID=command.classificationid;
            },
            handleCommand6(command) {
                this.textVal6=command;
                this.obj.dataattributetype=command;
            },
            handleCommand7(command) {
                this.textVal7=command;
                this.obj.acquisitiongeometry=command;
            },
            handleCommand8(command) {
                this.textVal8=command;
                this.obj.acquisitionfrequency=command;
            },
            handleCommand9(command) {
                this.textVal9=command;
                this.obj.securityclassification=command;
            },
            /*----导入成功----*/
            handleSuccess(response, file, fileList){
                console.log(response)
                this.open(response)
            },
            /*----导入失败----*/
            handleError(err, file, fileList){
                console.log(err)
            },
            /*----批量导入，控制弹出层----*/
            BatchImport(){
                console.log('导入')
                if(this.flag){
                    this.flag=false;
                }else{
                    this.flag=true;
                }
            },
            /*----点击提交按钮时执行----*/
            submitUpload(file) {
                // debugger
                 console.log(file)
                this.$refs.upload.submit();
            },
            /*----当文件删除时执行----*/
            handleRemove(file, fileList) {
                console.log('删除')
                this.textVale='浏览';
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            /*----监听改变是否传入----*/
             handleChange(file, fileList) {
                 this.textVale='';
                 console.log('状态改变')
                this.fileList3 = fileList.slice(-3);
            },
            /*----判断传入文件的后缀与大小----*/
            beforeAvatarUpload(file) { 	
                console.log(file)		
				var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)				
				const extension = testmsg === 'xls'
				const extension2 = testmsg === 'xlsx'
				const isLt2M = file.size / 1024 / 1024 < 5
				if(!extension && !extension2) {
					this.$message({
						message: '上传文件只能是 xls、xlsx格式!',
						type: 'warning'
					});
				}
				if(!isLt2M) {
					this.$message({
						message: '上传文件大小不能超过 10MB!',
						type: 'warning'
					});
				}
				return extension || extension2 && isLt2M
            },
            readExcel(e) {//表格导入
                var that = this;
                const files = e.target.files;
                console.log(files);
                if(files.length<=0){//如果没有文件名
                return false;
                }else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
                this.$Message.error('上传格式不正确，请上传xls或者xlsx格式');
                return false;
                }
        
                const fileReader = new FileReader();
                fileReader.onload = (ev) => {
                try {
                    const data = ev.target.result;
                    const workbook = XLSX.read(data, {
                    type: 'binary'
                    });
                    const wsname = workbook.SheetNames[0];//取第一张表
                    const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容
                    console.log(ws);
                    that.outputs = [];//清空接收数据
                    for(var i= 0;i<ws.length;i++){
                    var sheetData = {
                        address: ws[i].addr,
                        value: ws[i].value
                    }
                    that.outputs.push(sheetData);
                    }
                    this.$refs.upload.value = '';
        
                } catch (e) {
        
                    return false;
                }
                };
                console.log(files[0])
                fileReader.readAsBinaryString(files[0]);
            },
            warning1(){
                if(this.data.length<=0&&this.data1.length<=0){
                    this.open4()
                }
            },
            warning2(){
                if(this.data1.length<=0&&this.data2.length<=0){
                    this.open4()
                }
            },
            warning3(){
                if(this.data2.length<=0&&this.data3.length<=0){
                    this.open4()
                }
            },
            warning4(){
                if(this.data3.length<=0&&this.data4.length<=0){
                    this.open4()
                }
            },
            open4() {
                this.$notify({
                    title: '警告',
                    message: '请先选择上一级',
                    type: 'warning'
                });
            },
        }
    }
</script>
<style scoped>
@import './AssetContentCreation.style.css';
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

