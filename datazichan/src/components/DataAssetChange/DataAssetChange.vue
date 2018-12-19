<template>
    <div id="DataAssetChange">
          <div class="top">
            <h5>数据资产内容维护</h5>
            <h6>
                <span @click='create'>创建</span>
            </h6>
        </div>
        <div class="box">
            <h4>查询</h4>
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
                        <input type="text" class='dataentityname' >
                    </li>
                   
                    <li>
                        <h5>所在系统</h5>
                        <input type="text" class='system'>
                    </li>
                    <li>
                        <h5>所属组织</h5>
                        <input type="text" class='departmentname'>
                    </li>
                    <li>
                        <h5>数据负责人</h5>
                        <input type="text" class='dataownername'>
                    </li>
                    <li>
                        <h5>状态</h5>
                        <el-dropdown @command="handleCommand6">
                            <span class="el-dropdown-link">
                                {{textVal6}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="待提交">待提交</el-dropdown-item>
                                <el-dropdown-item command="已提交">已提交</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown> 
                    </li>
                    <li>
                        <h5>日期</h5>
                        <el-date-picker
                            v-model="value7"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            @change='onChange'
                            :picker-options="pickerOptions2">
                        </el-date-picker>
                    </li>
                    <li>
                    </li>
                </ul>
                <div class="btns">
                    <span @click='Reset'>重置</span>
                    <span @click='submit'>查询</span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <table cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>数据实体</th>
                        <th>数据属性</th>
                        <th>数据所属规模/组织</th>
                        <th>数据责任人</th>
                        <th>数据日期</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item,index) in dataList' :key='index'>
                        <td>{{item.num}}</td>
                        <td>{{item.dataentityname}}</td>
                        <td>{{item.dataattributename}}</td>
                        <td>{{item.departmentname}}</td>
                        <td>{{item.dataownername}}</td>
                        <td>{{item.updateTime}}</td>
                        <td>
                            <span :class='item.status?"sub":"pensub"'>{{item.status?'已提交':'待提交'}}</span>
                        </td>
                        <td>
                            <router-link :to="{path:'/Details',query:{id:item.maintenanceid}}">
                                <em><i class='el-icon-more'></i></em>
                            </router-link>
                            <router-link :to="{path:'/EditPage',query:{id:item.maintenanceid}}">
                                <i class='el-icon-edit-outline'></i>
                            </router-link>
                            
                            <i class='el-icon-delete' @click='Delete(item)'></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-size="10"
                layout=" prev, pager, next, jumper, total"
                :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name:'DataAssetChange',
        data(){
            return {
                data:[],
                data1:[],
                data2:[],
                data3:[],
                data4:[],
                dataList:[],
                textVal1:'下拉列表',
                textVal2:'下拉列表',
                textVal3:'下拉列表',
                textVal4:'下拉列表',
                textVal5:'下拉列表',
                textVal6:'下拉列表',
                currentPage4: 4,
                totalCount:0,
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value7: '',
                obj:{
                    "professionalPlateID":'',
                    "firstClassificationID":'',
                    "secondClassificationID":'',
                    "thirdClassificationID":'',
                    "fourthClassificationID":'',
                    "dataentityname":"",
                    "system":"",
                    "departmentname":"",
                    "dataownername":"",
                    "status":"",
                    "startTime":"",
                    "endTime":""
                },

            
            }
        },
        inject:['reload'],
        components:{
        },
        mounted(){
            var _this=this;
            console.log(this.Root)
            $.ajax({
                url: `${this.Root}datagovern/contentbaseinfo/findByParent`,
                dataType: "json",
                method: 'GET',
                data: {
                    "parentclassificationid":0
                },
                success: function(data) {
                console.log(data);
                    _this.data=data.data?data.data:[];
                }
            })
            $.ajax({
                url: `${this.Root}datagovern/contentbaseinfo/findByScreen`,
                dataType: "json",
                method: 'GET',
                success: function(data) {
                console.log(data);
                    _this.dataList=data.data?data.data:[];
                    _this.totalCount=data?data.totalCount:0;
                }
            })
        },
        methods:{
            /*----创建----*/
            create(){
                this.$router.push('/AssetContentCreation');
            },
            /*----维护----*/
            maintain(){
                this.$router.push('/DataClassification');
            },
            /*----删除----*/
            Delete(obj){
                var _this=this;
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/delete`,
                    dataType: "json",
                    method: 'GET',
                    data:{
                        maintenanceid:obj.maintenanceid
                    },
                    success: function(data) {
                    console.log(data);
                    _this.reload();
                        $.ajax({
                            url: `${this.Root}datagovern/contentbaseinfo/findByScreen`,
                            dataType: "json",
                            method: 'GET',
                            success: function(data) {
                            console.log(data);
                                _this.dataList=data.data?data.data:[];
                                _this.totalCount=data?data.totalCount:0;
                            }
                        })
                    }
                })
            },
            /*----重置----*/
            Reset(){
                var inp=$('.box input');
                var _this=this;
                console.log(inp)
                for(var i=0;i<inp.length;i++){
                    if(inp[i].className!='el-range-input'){
                        this.obj[inp[i].className]="";
                        inp[i].value="";
                    }
                    
                }
                this.data1=[];
                this.data2=[];
                this.data3=[];
                this.data4=[];
                this.dataList=[];
                this.textVal1='下拉列表';
                this.textVal2='下拉列表';
                this.textVal3='下拉列表';
                this.textVal4='下拉列表';
                this.textVal5='下拉列表';
                this.textVal6='下拉列表';
                this.value7='';
                 $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByScreen`,
                    dataType: "json",
                    method: 'GET',
                    success: function(data) {
                    console.log(data);
                        _this.dataList=data.data?data.data:[];
                        _this.totalCount=data?data.totalCount:0;
                    }
                })
            },
            /*----提交----*/
            submit(){
                var inp=$('.box input');
                var _this=this;
                console.log(inp)
                for(var i=0;i<inp.length;i++){
                    if(inp[i].className!='el-range-input'){
                        this.obj[inp[i].className]=inp[i].value;
                    }
                    
                }
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByScreen`,
                    dataType: "json",
                    method: 'GET',
                    data:_this.obj,
                    success: function(data) {
                    console.log(data);
                        _this.dataList=data.data?data.data:[];
                        _this.totalCount=data?data.totalCount:0;
                    }
                })
            },
            /*----监听时间time——time----*/
            onChange(date){
                console.log(date)
                var statey=this.value7[0]?new Date(this.value7[0]).getFullYear():'',
                    statem=this.value7[0]?new Date(this.value7[0]).getMonth()+1:'',
                    stated=this.value7[0]?new Date(this.value7[0]).getDate():'';

                var endy=this.value7[1]?new Date(this.value7[1]).getFullYear():'',
                    endm=this.value7[1]?new Date(this.value7[1]).getMonth()+1:'',
                    endd=this.value7[1]?new Date(this.value7[1]).getDate():'';
                this.obj.startTime=statey+'-'+statem+'-'+stated
                this.obj.endTime=endy+'-'+endm+'-'+endd

            },
            /*----获取数据----*/
            getData(val){
                console.log(val)
                var _this=this;
                
                $.ajax({
                    url: `${this.Root}datagovern/contentbaseinfo/findByScreen`,
                    dataType: "json",
                    method: 'GET',
                    data:{
                        page:val
                    },
                    success: function(data) {
                    console.log(data);
                        _this.dataList=data.data?data.data:[]
                    }
                })
            },
            /*----分页器事件----*/
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.getData(val)
            },
            /*----下拉列表事件----*/
            handleCommand1(command) {
                console.log(command);
                var _this=this;
                this.obj.professionalPlateID=command.classificationid;
                this.textVal1=command.classificationname;
                this.data1=[];
                this.data2=[];
                this.data3=[];
                this.data4=[];
                this.textVal2='下拉列表';
                this.textVal3='下拉列表';
                this.textVal4='下拉列表';
                this.textVal5='下拉列表';
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
                this.textVal2=command.classificationname;
                this.obj.firstClassificationID=command.classificationid;
                this.data2=[];
                this.data3=[];
                this.data4=[];
                this.textVal3='下拉列表';
                this.textVal4='下拉列表';
                this.textVal5='下拉列表';
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
                this.textVal3=command.classificationname;
                this.obj.secondClassificationID=command.classificationid;
                this.data3=[];
                this.data4=[];
                this.textVal4='下拉列表';
                this.textVal5='下拉列表';
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
                this.textVal4=command.classificationname;
                this.obj.thirdClassificationID=command.classificationid;
                this.data4=[];
                this.textVal5='下拉列表';
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
                this.obj.fourthClassificationID=command.classificationid;
            },
            handleCommand6(command) {
                this.textVal6=command;
                if(command=='已提交'){
                    this.obj.status=1;
                }else{
                    this.obj.status=0;
                }
                
            },
        }
    }
</script>
<style scoped>
    @import './DataAssetChange.style.css';
    .el-dropdown-menu{
        width: 20%;
    }
    
</style>