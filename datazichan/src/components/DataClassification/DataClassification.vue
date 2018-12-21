<template>
    <div id="DataClassification">
        <div class="top">
            <h4>数据资产分类维护</h4>
            <div class="nav" @click='eventDelegation' ref="nav">
                <p>分类维护对象筛选</p>
                <b class='clicka'>专业板块</b>
                <b>一级业务域</b>
                <b>二级业务域</b>
                <b>三级业务域</b>
                <b>四级业务域</b>
            </div>
        </div>
        <div class="bottom">
            <div class="box">
                <h5>专业板块分类维护</h5>
                <div class="inbox">
                    <h6 @click="add"><i class="el-icon-circle-plus-outline"></i> 增加</h6>
                    <h5 @click='returns'>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fanhui"></use>
                        </svg> 返回
                    </h5>
                    <table cellspacing="0" cellpadding="0" v-if='isRouterAlive3'>
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>分类级别</th>
                                <th>分类名称</th>
                                <th>父节点级别</th>
                                <th>父节点名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody ref='tbody' id='tbody'>
                            <tr v-for='(item,index) in data' :key='index'>
                                <td>{{item.num}}</td>
                                <td :ind='item.classificationlevel'>{{item.classificationlevelname}}</td>
                                <td @click="GetDataAxios(item)">{{item.classificationname}}</td>
                                <td>{{item.parentclassificationlevelname?item.parentclassificationlevelname:'-'}}</td>
                                <td>{{item.parentclassificationname?item.parentclassificationname:'-'}}</td>
                                <td>
                                    <i class='el-icon-edit-outline' @click='xiangqingxiugai(item)'></i>
                                    <i class='el-icon-delete' @click="Delete(item)"></i>
                                    <svg class="icon shang" aria-hidden="true" @click='up(item)'>
                                        <use xlink:href="#icon-xiangshang"></use>
                                    </svg>
                                    <svg class="icon" aria-hidden="true" @click='down(item)'>
                                        <use xlink:href="#icon-xiangshang"></use>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <el-pagination 
                @size-change="handleSizeChange" 
                @current-change="handleCurrentChange" 
                :current-page="currentPage4" 
                :page-size="10" 
                layout=" prev, pager, next, jumper, total" 
                :total="totalCount">
            </el-pagination>
        </div>
        <el-dialog title="创建" :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="分类级别" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="分类名称" prop="dat1">
                    <el-input v-model="ruleForm.dat1"></el-input>
                </el-form-item>
                <el-form-item label="父节点名称" prop="region" v-if='ruleForm.name=="专业板块"?false:true'>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option v-for="(item,index) in dataLIst" :key='index' :label="item.classificationname" :value="item.classificationid"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-dialog title="编辑" :visible.sync="dialogFormVisible2">
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
                <el-form-item label="分类名称" prop="dat1">
                    <el-input v-model="ruleForm2.dat1"></el-input>
                </el-form-item>
                <el-form-item label="父节点名称" prop="region">
                    <el-select v-model="ruleForm2.region" placeholder="请选择活动区域">
                    <el-option v-for="(item,index) in dataLIst" :key='index' :label="item.classificationname" :value="item.classificationid"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm2('ruleForm2')">立即修改</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name: 'DataClassification',
        provide() {
            return {
                reload3: this.reload3
            }
        },
        data() {
            return {
                data: [], //数据
                classificationlevelname: '专业板块', //
                currentPage4: 4,
                totalCount: 0,
                list: null,
                ind:1,
                dataLIst:[],
                dialogFormVisible: false,
                dialogFormVisible2: false,
                ruleForm: {
                    name: '',
                    region: '',
                    dat1: '',
                    dat2: '',
                    ind:0
                },
                ruleForm2: {
                    name: '',
                    region: '',
                    dat1: '',
                    dat2: '',
                    ind:0
                },
                rules: {
                    name: [
                        { required: true, message: '分类级别', trigger: 'blur' },
                        { min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur' }
                    ],
                    dat1:[
                        { required: true, message: '分类名称', trigger: 'blur' },
                        { min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur' }
                    ],
                    dat2:[
                        { required: false, message: '父节点级别', trigger: 'blur' },
                    ],
                    region: [
                        { required: false, message: '父节点名称', trigger: 'change' }
                    ],
                },
                rules2: {
                    name: [
                        { required: true, message: '分类级别', trigger: 'blur' },
                        { min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur' }
                    ],
                    dat1:[
                        { required: true, message: '分类名称', trigger: 'blur' },
                        { min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur' }
                    ],
                    dat2:[
                        { required: false, message: '父节点级别', trigger: 'blur' },
                    ],
                    region: [
                        { required: false, message: '父节点名称', trigger: 'change' }
                    ],
                },
                isRouterAlive3:true
            }
        },
        inject: ['reload','reload2'],
        
        mounted() {
            var _this = this;
            $.ajax({
                url: `${this.Root}datagovern/classification/findByLevel`,
                dataType: "json",
                method: 'POST',
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify({
                    "classificationlevelname": _this.classificationlevelname
                }),
                success: function(data) {
                    console.log(data);
                    _this.data = data.data.datas ? data.data.datas : [];
                    _this.totalCount = data.totalCount;
                    _this.list = data.data.list;
                }
            })
        },
        watch: {
        },
        methods: {
            reload3() {
                this.isRouterAlive3 = false
                this.$nextTick(() => (this.isRouterAlive3 = true))
                var _this=this;
            },
            xiangqingxiugai(data){
                this.dialogFormVisible2=true;
                console.log(data)
                this.ruleForm2.name=data.classificationid;
                this.ruleForm2.dat1=data.classificationname;
                this.ruleForm.dat2=data.parentclassificationlevelname;
                this.ruleForm2.ind=data.classificationlevelname
                this.dataGet(this.ruleForm.dat2)
            },
            /*----添加----*/
            add() {
                this.dialogFormVisible = true;
                var tds=this.$refs.tbody.rows[0]?this.$refs.tbody.rows[0].querySelectorAll('td'):'';
                this.ruleForm.name=tds[1]? tds[1].innerHTML:'四级业务域';
                this.ruleForm.ind=tds[1] ? tds[1].getAttribute("ind"):"5";
                this.ruleForm.dat2=tds[3]? tds[3].innerHTML:'三级业务域';
                this.dataGet(this.ruleForm.dat2);
            },
            /*----获取数据父节点名称----*/ 
            dataGet(val){

                var _this=this;
                $.ajax({
                    url: `${this.Root}datagovern/classification/findByLevel`,
                    dataType: "json",
                    method: 'POST',
                    contentType: "application/json;charset=utf-8",
                    data: JSON.stringify({
                        "classificationlevelname": val
                    }),
                    success: function(data) {
                        console.log(data); 
                        _this.dataLIst=data.data.datas?data.data.datas:[];
                    }
                })
            },
            /*----增加提交----*/
            submitForm(formName) {
                var _this=this;
                
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm);
                    $.ajax({
                        url: `${this.Root}datagovern/classification/create`,
                        dataType: "json",
                        method: 'POST',
                        contentType: "application/json;charset=utf-8",
                        data: JSON.stringify({
                            "classificationname":_this.ruleForm.dat1,
                            "parentclassificationid":_this.ruleForm.region?_this.ruleForm.region:0,
                            "classificationlevel":_this.ruleForm.ind,
                            "classificationlevelname":_this.ruleForm.name,
                            "userName":"read"
                        }),
                        success: function(data) {
                            console.log(data); 
                            $.ajax({
                                url: `${_this.Root}datagovern/classification/findByLevel`,
                                dataType: "json",
                                method: 'POST',
                                contentType: "application/json;charset=utf-8",
                                data: JSON.stringify({
                                    "classificationlevelname": _this.ruleForm.name
                                }),
                                success: function(data) {
                                    console.log(data);
                                    _this.data = data.data.datas ? data.data.datas : [];
                                    _this.totalCount = data.totalCount;
                                    _this.list = data.data.list;
                                    _this.dialogFormVisible = false;
                                    _this.ruleForm={
                                        name: '',
                                        region: '',
                                        dat1: '',
                                        dat2: '',
                                        ind:0
                                    };
                                    _this.reload2();
                                    _this.reload3();
                                }
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            /*----修改提交----*/
            submitForm2(formName2) {
                var _this=this;
                this.$refs[formName2].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm2);
                    $.ajax({
                        url: `${this.Root}datagovern/classification/update`,
                        dataType: "json",
                        method: 'POST',
                        contentType: "application/json;charset=utf-8",
                        data: JSON.stringify({
                            "classificationid":_this.ruleForm2.name,
                            "parentclassificationid":_this.ruleForm2.region?_this.ruleForm2.region:0,
                            "classificationname":_this.ruleForm2.dat1,
                            "userName":"read"
                        }),
                        success: function(data) {
                            console.log(data); 
                            $.ajax({
                                url: `${_this.Root}datagovern/classification/findByLevel`,
                                dataType: "json",
                                method: 'POST',
                                contentType: "application/json;charset=utf-8",
                                data: JSON.stringify({
                                    "classificationlevelname": _this.ruleForm2.ind
                                }),
                                success: function(data) {
                                    console.log(data);
                                    _this.data = data.data.datas ? data.data.datas : [];
                                    _this.totalCount = data.totalCount;
                                    _this.list = data.data.list;
                                    _this.dialogFormVisible2 = false;
                                    _this.ruleForm={
                                        name: '',
                                        region: '',
                                        dat1: '',
                                        dat2: '',
                                        ind:0
                                    };
                                    _this.reload2();
                                    _this.reload3();
                                }
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            open(data) {
    
                var teval = '';
    
                var teval2 = data.errMsg
    
                this.$alert(teval2, teval, {
    
                    confirmButtonText: '确定',
    
                });
    
            },
            /*----返回----*/
            returns() {
                var obj=this.list.splice(-2);
                var _this=this
                console.log(this.list)
                console.log(obj)
                var b=this.$refs.nav.querySelectorAll('b');
                for(var i=0;i<b.length;i++){
                    b[i].className='';
                }
                var tds='';
                if(obj[0].id){
                    $.ajax({
                        url: `${this.Root}datagovern/classification/findByParent`,
                        dataType: "json",
                        method: 'POST',
                        contentType: "application/json;charset=utf-8",
                        data: JSON.stringify({
                            "classificationid": obj[0].id,
                            "list":_this.list
                        }),
                        success: function(data) {
                            console.log(data);
                            if (data.data) {
                                _this.data = data.data.datas ? data.data.datas : [];
                                _this.totalCount = data.totalCount;
                                _this.list=data.data.list
                            } else {
                                _this.open(data)
        
                            }
                            setTimeout(()=>{
                                tds=_this.$refs.tbody.rows[0].querySelectorAll('td')[1].innerHTML;
                                console.log(tds)
                                for(var i=0;i<b.length;i++){
                                    if(tds==b[i].innerHTML)
                                    b[i].className='clicka';
                                }
                            },10)
                        }
                    })
                }else if(obj[0].name){
                    
                    $.ajax({
                        url: `${this.Root}datagovern/classification/findByLevel`,
                        dataType: "json",
                        method: 'POST',
                        contentType: "application/json;charset=utf-8",
                        data: JSON.stringify({
                            "classificationlevelname":obj[0].name,
                            "page": this.ind,
                            "list": _this.list
                        }),
                        success: function(data) {
                            console.log(data);
                            _this.data = data.data.datas ? data.data.datas : [];
                            _this.totalCount = data.totalCount;
                            _this.list = data.data.list;
                            setTimeout(()=>{
                                tds=_this.$refs.tbody.rows[0].querySelectorAll('td')[1].innerHTML;
                                console.log(tds)
                                for(var i=0;i<b.length;i++){
                                    if(tds==b[i].innerHTML)
                                    b[i].className='clicka';
                                }
                            },10)
                        }
                    })
                }else if(obj.length<=1){
                     $.ajax({
                        url: `${this.Root}datagovern/classification/findByLevel`,
                        dataType: "json",
                        method: 'POST',
                        contentType: "application/json;charset=utf-8",
                        data: JSON.stringify({
                            "classificationlevelname": '专业模块'
                        }),
            
                        success: function(data) {
                            console.log(data);
                            _this.data = data.data.datas ? data.data.datas : [];
                            _this.totalCount = data.totalCount;
                            _this.list = data.data.list;
                            setTimeout(()=>{
                                tds=_this.$refs.tbody.rows[0].querySelectorAll('td')[1].innerHTML;
                                console.log(tds)
                                for(var i=0;i<b.length;i++){
                                    if(tds==b[i].innerHTML)
                                    b[i].className='clicka';
                                }
                            },10)
                        }
            
                    })
                }
                
            },
    
            
            /*----级别----*/
    
            GetDataAxios(val) {
               
                var b=this.$refs.nav.querySelectorAll('b');
                for(var i=0;i<b.length;i++){
                    b[i].className='';
                }
                var tds='';
                var _this = this;
                console.log(val)
                
                $.ajax({
                    url: `${this.Root}datagovern/classification/findByParent`,
                    dataType: "json",
                    method: 'POST',
                    contentType: "application/json;charset=utf-8",
                    data: JSON.stringify({
                        "classificationid": val.classificationid,
                        "list":_this.list
                    }),
                    success: function(data) {
                        console.log(data);
                        if (data.data) {
                            _this.data = data.data.datas ? data.data.datas : [];
                            _this.totalCount = data.totalCount;
                            _this.list=data.data.list
                        } else {
                            _this.open(data)
    
                        }
                        setTimeout(()=>{
                            tds=_this.$refs.tbody.rows[0].querySelectorAll('td')[1].innerHTML;
                            console.log(tds)
                            for(var i=0;i<b.length;i++){
                                if(tds==b[i].innerHTML)
                                b[i].className='clicka';
                            }
                        },10)
                        
                    }
                })
    
            },
    
            /*----删除----*/
    
            Delete(obj) {
                var _this = this;
                var arr = [];
                arr.push()
                $.ajax({
                    url: `${this.Root}datagovern/classification/delete`,
                    dataType: "json",
                    method: 'POST',
                    data: {
                        "classificationid": obj.classificationid
                    },
                    success: function(data) {
                        console.log(data);
                        $.ajax({
                            url: `${_this.Root}datagovern/classification/findByLevel`,
                            dataType: "json",
                            method: 'POST',
                            contentType: "application/json;charset=utf-8",
                            data: JSON.stringify({
                                "classificationlevelname": _this.classificationlevelname
                            }),
                            success: function(data) {
                                console.log(data);
                                _this.data = data.data.datas ? data.data.datas : [];
                                _this.totalCount = data.totalCount;
                                _this.reload3();
                                _this.reload2();
                            }
                        })
                    }
                })
            },
            /*----向上----*/
            up(obj) {
                var _this = this;
                console.log(obj)
                if(obj.num!==1){
                    $.ajax({
                        url: `${this.Root}datagovern/classification/updateSort`,
                        dataType: "json",
                        method: 'POST',
                        data: {
                            "num":obj.num,
                            "classificationid": obj.classificationid,
                            "sort": obj.sort,
                            "status": 0,
                            "id":_this.list[_this.list.length-1].id,
                            "name":_this.list[_this.list.length-1].name
                        },
        
                        success: function(data) {
        
                            if(_this.list[_this.list.length-1].name){
                                $.ajax({
                                    url: `${_this.Root}datagovern/classification/findByLevel`,
                                    dataType: "json",
                                    method: 'POST',
                                    contentType: "application/json;charset=utf-8",
                                    data: JSON.stringify({
                                        "classificationlevelname": _this.list[_this.list.length-1].name,
                                        "list":_this.list.splice(0,_this.list.length-1)
                                    }),
                                    success: function(data) {
                                        console.log(data);
                                        _this.data = data.data.datas ? data.data.datas : [];
                                        _this.totalCount = data.totalCount;
                                        _this.list=data.data.list
                                    }
                                })
                            }else if(_this.list[_this.list.length-1].id){
                            $.ajax({
                                    url: `${_this.Root}datagovern/classification/findByParent`,
                                    dataType: "json",
                                    method: 'POST',
                                    contentType: "application/json;charset=utf-8",
                                    data: JSON.stringify({
                                        "classificationid": _this.list[_this.list.length-1].id,
                                        "list":_this.list.splice(0,_this.list.length-1)
                                    }),
                                    success: function(data) {
                                        console.log(data);
                                            _this.data = data.data.datas ? data.data.datas : [];
                                            _this.totalCount = data.totalCount;
                                            _this.list=data.data.list
                                    }
                                }) 
                            }
        
                        }
        
                    })
                }else{
                    this.open({errMsg:'这是第一条数据，不支持上下切换'})
                }
            },
    
            /*----向下----*/
    
            down(obj) {
    
                var _this = this;
                if(obj.num!==_this.totalCount){
                    $.ajax({
                        url: `${this.Root}datagovern/classification/updateSort`,
                        dataType: "json",
                        method: 'POST',
                        data: {
                            "num":obj.num,
                            "classificationid": obj.classificationid,
                            "sort": obj.sort,
                            "status": 1,
                            "id":_this.list[_this.list.length-1].id,
                            "name":_this.list[_this.list.length-1].name
                        },
                        success: function(data) {
                            console.log(data);
                            if(_this.list[_this.list.length-1].name){
                                $.ajax({
                                    url: `${_this.Root}datagovern/classification/findByLevel`,
                                    dataType: "json",
                                    method: 'POST',
                                    contentType: "application/json;charset=utf-8",
                                    data: JSON.stringify({
                                        "classificationlevelname": _this.list[_this.list.length-1].name,
                                        "list":_this.list.splice(0,_this.list.length-1)
                                    }),
                                    success: function(data) {
                                        console.log(data);
                                        _this.data = data.data.datas ? data.data.datas : [];
                                        _this.totalCount = data.totalCount;
                                        _this.list=data.data.list
                                    }
                                })
                            }else if(_this.list[_this.list.length-1].id){
                            $.ajax({
                                    url: `${_this.Root}datagovern/classification/findByParent`,
                                    dataType: "json",
                                    method: 'POST',
                                    contentType: "application/json;charset=utf-8",
                                    data: JSON.stringify({
                                        "classificationid": _this.list[_this.list.length-1].id,
                                        "list":_this.list.splice(0,_this.list.length-1)
                                    }),
                                    success: function(data) {
                                        console.log(data);
                                            _this.data = data.data.datas ? data.data.datas : [];
                                            _this.totalCount = data.totalCount;
                                            _this.list=data.data.list
                                    }
                                }) 
                            }
        
                        }
                    })
                }else{
                    this.open({errMsg:'这是最后一条数据，不支持上下切换'})
                }
                
    
            },
    
            /*----时间委托----*/
            eventDelegation(e) {
                var e = e || window.event;
                var target = e.target || e.srcElement; //兼容
                var b = document.querySelectorAll('b');
                for (var i = 0; i < b.length; i++) {
                    b[i].className = ''
                }
                for (var i in b) {
                    if (target === b[i]) { //判断点击的是否是一个b
                        this.classificationlevelname = b[i].innerHTML;
                        var value = parseInt(i);
                        b[i].className = 'clicka'
                    }
                }
                this.getData();
            },
    
            /*----获取数据----*/
    
            getData(val) {
    
                var _this = this;
    
                $.ajax({
                    url: `${this.Root}datagovern/classification/findByLevel`,
                    dataType: "json",
                    method: 'POST',
                    contentType: "application/json;charset=utf-8",
                    data: JSON.stringify({
                        "classificationlevelname": _this.classificationlevelname,
                        "page": val,
                        "list": _this.list
                    }),
                    success: function(data) {
                        console.log(data);
                        _this.data = data.data.datas ? data.data.datas : [];
                        _this.totalCount = data.totalCount;
                        _this.list = data.data.list
                    }
                })
            },
    
            /*----分页器事件----*/
    
            handleSizeChange(val) {
    
                console.log(`每页 ${val} 条`);
    
            },
    
            handleCurrentChange(val) {
    
                console.log(`当前页: ${val}`);
                this.ind=val
    
                console.log(val)
    
                this.getData(val)
    
            },
    

        }
    
    }
</script>
<style scoped>
    @import './DataClassification.style.css';
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    
    .el-select{
        width: 100%;
    }
    
    .el-pagination {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        text-align: center;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .el-pagination .el-pagination__total {
        margin-left: 10px;
    }
    .el-date-editor {
        width: 100%;
    }
</style>