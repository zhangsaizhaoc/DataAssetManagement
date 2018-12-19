<template>
    <div id="DataClassification">
    
        <div class="top">
    
            <h4>数据资产分类维护</h4>
    
            <div class="nav" @click='eventDelegation' ref="nav">
    
                <p>分类维护对象筛选</p>
    
                <span class='clicka'>专业板块</span>
    
                <span>一级业务域</span>
    
                <span>二级业务域</span>
    
                <span>三级业务域</span>
    
                <span>四级业务域</span>
    
            </div>
    
        </div>
    
        <div class="bottom">
    
            <div class="box">
    
                <h5>专业板块分类维护</h5>
    
                <div class="inbox">
    
                    <h6 @click='add'><i class="el-icon-circle-plus-outline"></i> 增加</h6>
    
                    <h5 @click='returns'>
    
                        <svg class="icon" aria-hidden="true">
    
                                <use xlink:href="#icon-fanhui"></use>
    
                            </svg> 返回
    
                    </h5>
    
                    <table cellspacing="0" cellpadding="0">
    
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
    
                                <td>{{item.classificationlevelname}}</td>
    
                                <td @click="GetDataAxios(item)">{{item.classificationname}}</td>
    
                                <td>{{item.parentclassificationlevelname?item.parentclassificationlevelname:'-'}}</td>
    
                                <td>{{item.parentclassificationname?item.parentclassificationname:'-'}}</td>
    
                                <td>
    
                                    <i class='el-icon-edit-outline'></i>
    
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
    
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="10" layout=" prev, pager, next, jumper, total" :total="totalCount">
    
            </el-pagination>
    
        </div>
    
    </div>
</template>
<script>
    import $ from 'jquery'
    
    export default {
    
        name: 'DataClassification',
    
        data() {
    
            return {
    
                data: [], //数据
    
                classificationlevelname: '专业板块', //
    
                currentPage4: 4,
    
                totalCount: 0,
    
                list: null,
                ind:1
            }
        },
        inject: ['reload'],
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
                                _this.totalCount = data.data.totalCount;
                                _this.list=data.data.list
                            } else {
                                _this.open(data)
        
                            }
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
                            _this.list = data.data.list
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
                        }
            
                    })
                }
            },
    
            /*----添加----*/
    
            add() {
                var str =$( `<span data-v-0d66e5e2 @click='confirm'>确认</span><span  data-v-0d66e5e2 @click='cancel'>取消</span>`);
                var td2 = $("<td>");
                td2.html(str);
                var tr = $("<tr>");
                for (var i = 0; i < 5; i++) {
                    var td = $("<td data-v-0d66e5e2></td>");
                    var inp = '<input data-v-0d66e5e2 type="text"/>'
                    td.html(inp);
                    tr.append(td);
                }
                tr.append(td2)
                console.log(this.$refs.tbody.getAttribute('data-v-0d66e5e2'))
                $("#tbody").append(tr)
            },
            cancel(){

            },
            confirm(){
                var input=$('input');
                console.log(input,11111)
            },
            /*----级别----*/
    
            GetDataAxios(val) {
    
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
                            _this.totalCount = data.data.totalCount;
                            _this.list=data.data.list
                        } else {
                            _this.open(data)
    
                        }
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
    
                    contentType: "application/json;charset=utf-8",
    
                    data: {
    
                        "classificationid": obj.classificationid
    
                    },
    
                    success: function(data) {
    
                        console.log(data);
    
                        $.ajax({
    
                            url: `${this.Root}datagovern/classification/findByLevel`,
    
                            dataType: "json",
    
                            method: 'POST',
    
                            contentType: "application/json;charset=utf-8",
    
                            data: {
    
                                "classificationlevelname": _this.classificationlevelname
    
                            },
    
                            success: function(data) {
    
                                console.log(data);
    
                                _this.data = data.data ? data.data : [];
    
                                _this.totalCount = data.data ? data.data.length : 0
    
                            }
    
                        })
    
                    }
    
                })
    
            },
    
            /*----向上----*/
    
            up(obj) {
                var _this = this;
                console.log(obj)
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
                                    _this.totalCount = data.data.totalCount;
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
                                        _this.totalCount = data.data.totalCount;
                                        _this.list=data.data.list
                                }
                            }) 
                        }
    
                    }
    
                })
    
            },
    
            /*----向下----*/
    
            down(obj) {
    
                var _this = this;
    
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
                                    _this.totalCount = data.data.totalCount;
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
                                        _this.totalCount = data.data.totalCount;
                                        _this.list=data.data.list
                                }
                            }) 
                        }
    
                    }
                })
    
            },
    
            /*----时间委托----*/
    
            eventDelegation(e) {
    
                var e = e || window.event;
    
                var target = e.target || e.srcElement; //兼容
    
                var span = document.querySelectorAll('span');
    
                for (var i = 0; i < span.length; i++) {
    
                    span[i].className = ''
    
                }
    
                for (var i in span) {
    
                    if (target === span[i]) { //判断点击的是否是一个span
    
                        this.classificationlevelname = span[i].innerHTML;
    
                        var value = parseInt(i);
    
                        span[i].className = 'clicka'
    
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