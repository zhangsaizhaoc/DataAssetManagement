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
                        </svg>
                        返回</h5>
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
                        <tbody ref='tbody'>
                            <tr v-for='(item,index) in data' :key='index' >
                                <td>{{index+1}}</td>
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
export default{
    name:'DataClassification',
    data(){
        return {
            data:[],//数据
            classificationlevelname:'专业板块',//
            currentPage4: 4,
            totalCount:0
        }
    },
    inject:['reload'],
    mounted(){
        var _this=this;
        $.ajax({
            url: `${this.Root}datagovern/classification/findByLevel`,
            dataType: "json",
            method: 'GET',
            data: {
                "classificationlevelname":_this.classificationlevelname
            },
            success: function(data) {
            console.log(data);
                _this.data=data.data?data.data:[];
                _this.totalCount=data.data?data.data.length:0
            }
        })
    },
    watch:{

    },
    methods:{
        open(data) {
            var teval='';
            var teval2=data.errMsg
            this.$alert(teval2,teval , {
                confirmButtonText: '确定',
            });
        },
        returns(){

        },
        /*----添加----*/
        add(){

            var str=`<i class='el-icon-edit-outline'></i>
                    <i class='el-icon-delete' @click="Delete(item)"></i>
                    <svg class="icon shang" aria-hidden="true" @click='up(item)'>
                        <use xlink:href="#icon-xiangshang"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" @click='down(item)'>
                        <use xlink:href="#icon-xiangshang"></use>
                    </svg>`;
            var td2=document.createElement("td");
            td2.innerHTML=str;
            var tr=document.createElement("tr");
            tr.className='tr';
            for(var i=0;i<5;i++){
                var td=document.createElement("td");
                var inp='<input type="text"/>'
                td['data-v-0d66e5e2']
                td.innerHTML=inp;
                tr.appendChild(td);
            }
            tr.appendChild(td2)
            console.log(tr)
            this.$refs.tbody.appendChild(tr)
            
            
        },
        /*----级别----*/
        GetDataAxios(val){
            var _this=this;
            $.ajax({
                url: `${this.Root}datagovern/classification/findByParent`,
                dataType: "json",
                method: 'GET',
                data: {
                    "classificationid":val.classificationid
                },
                success: function(data) {
                console.log(data);
                    if(data.data){
                        _this.data=data.data?data.data:[];
                        _this.totalCount=data.data?data.data.length:0
                    }else{
                        _this.open(data)
                    }
                    
                }
            })
        },
         /*----删除----*/
        Delete(obj){
            var _this=this;
            var arr=[];
            arr.push()
            $.ajax({
                url: `${this.Root}datagovern/classification/delete`,
                dataType: "json",
                method: 'GET',
                data: {
                    "classificationid":obj.classificationid
                },
                success: function(data) {
                    console.log(data);
                    $.ajax({
                        url: `${this.Root}datagovern/classification/findByLevel`,
                        dataType: "json",
                        method: 'GET',
                        data: {
                            "classificationlevelname":_this.classificationlevelname
                        },
                        success: function(data) {
                        console.log(data);
                            _this.data=data.data?data.data:[];
                            _this.totalCount=data.data?data.data.length:0
                        }
                    })
                }
            })
        },
        /*----向上----*/
        up(obj){
            var _this=this;
            console.log(obj)
            $.ajax({
                url: `${this.Root}datagovern/classification/updateSort`,
                dataType: "json",
                method: 'GET',
                data: {
                    "classificationid":obj.classificationid,
                    "sort":obj.sort,
                    "status":0
                },
                success: function(data) {
                    console.log(data);
                    $.ajax({
                        url: `${this.Root}datagovern/classification/findByLevel`,
                        dataType: "json",
                        method: 'GET',
                        data: {
                            "classificationlevelname":_this.classificationlevelname
                        },
                        success: function(data) {
                        console.log(data);
                            _this.data=data.data?data.data:[];
                            _this.totalCount=data.data?data.data.length:0
                        }
                    })
                }
            })
        },
        /*----向下----*/
        down(obj){
             var _this=this;
            $.ajax({
                url: `${this.Root}datagovern/classification/updateSort`,
                dataType: "json",
                method: 'GET',
                data: {
                    "classificationid":obj.classificationid,
                    "sort":obj.sort,
                    "status":1
                },
                success: function(data) {
                    console.log(data);
                   
                    $.ajax({
                        url: `${this.Root}datagovern/classification/findByLevel`,
                        dataType: "json",
                        method: 'GET',
                        data: {
                            "classificationlevelname":_this.classificationlevelname
                        },
                        success: function(data) {
                        console.log(data);
                            _this.data=data.data?data.data:[];
                            _this.totalCount=data.data?data.data.length:0
                        }
                    })
                }
            })
            this.getData()
        },
        /*----时间委托----*/
        eventDelegation(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;//兼容
            var span = document.querySelectorAll('span');
            for(var i=0;i<span.length;i++){
                span[i].className=''
            }
            for(var i in span){
                if(target === span[i]){//判断点击的是否是一个span
                    this.classificationlevelname=span[i].innerHTML;
                    var value = parseInt(i);
                    span[i].className='clicka'
                }
            }
            this.getData();
        },
        /*----获取数据----*/
        getData(){
            var _this=this;
            $.ajax({
                url: `${this.Root}datagovern/classification/findByLevel`,
                dataType: "json",
                method: 'GET',
                data: {
                    "classificationlevelname":_this.classificationlevelname
                },
                success: function(data) {
                console.log(data);
                    _this.data=data.data?data.data:[];
                    _this.totalCount=data.data?data.data.length:0
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

    }
}
</script>
<style scoped>
    @import './DataClassification.style.css';
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
     }
.el-pagination{
    width: 100%;
    height: 50px;
    margin-top: 20px;
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-pagination .el-pagination__total{
    margin-left: 10px;
}
.el-date-editor{
  width: 100%;  
}
</style>