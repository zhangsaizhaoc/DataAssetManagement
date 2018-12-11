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

        </div>
        <div class="mask" v-if='flag'>
            <el-upload
                class="upload-demo"
                ref="upload"
                action="/management/security/importexcel/uploadExcel"
                :on-preview="handlePreview"
                :on-change="handleChange"
                :on-remove="handleRemove"
                :file-list="userUploadFile"
                :auto-upload="false"
                :beforeUpload="beforeAvatarUpload"
                :data='userUploadFile'
            >
                <h6>批量导入</h6>

                
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            </el-upload>
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
                 userUploadFile: [],
            }
        },
        mounted() {

        },
        methods:{
            /*----批量导入----*/
            BatchImport(){
                if(this.flag){
                    this.flag=false;
                }else{
                    this.false=true;
                }
            },
            submitUpload(file) {
                // debugger
                 console.log(file)
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
             handleChange(file, fileList) {
                 console.log(file, fileList)
                this.fileList3 = fileList.slice(-3);
            },
            beforeAvatarUpload(file) { 			
				var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)				
				const extension = testmsg === 'xls'
				const extension2 = testmsg === 'xlsx'
				const isLt2M = file.size / 1024 / 1024 < 10
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
        }
    }
</script>
<style>
@import './AssetContentCreation.style.css';
</style>

