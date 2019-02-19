<template>
    <div class='fillcontain'>
        <head-top></head-top>
        <el-row style='margin-top: 20px;'>
            <el-col :span='20' >
                <header class='form_header'>Add-一分期-保险协议</header>
                <el-form :model='ruleForm' :rules="rules" ref='ruleForm' label-width='110px' class='form'>
                    <el-form-item label='类型' prop='type'>
                        <el-select v-model='ruleForm.type' placeholder='请选择'>
                            <el-option
                                v-for='item in typeOptions'
                                :key='item.value'
                                :label='item.label'
                                :value='item.value'>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label='所属产品' prop='belongs'>
                        <el-input v-model='ruleForm.belongs'></el-input>
                    </el-form-item>
                    <el-form-item label='描述' prop='desc'>
                        <el-input v-model='ruleForm.desc'></el-input>
                    </el-form-item>
                    <el-form-item label='资源' prop='resource'>
                        <el-upload
                            class='upload-file'
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            :on-success = 'success'
                            :multiple='false'
                            accept='.zip'
                            :file-list='fileList'
                            >
                            <el-button size='small' type='primary'>点击上传</el-button>
                            <div slot='tip' class='el-upload__tip'>上传已.zip结尾的压缩包,并且不能存在根目录</div>
                        </el-upload>
                        <el-input style='display:none;' v-model='ruleForm.resource'></el-input>
                    </el-form-item>
                    <el-form-item label='访问html' prop='visitHtml'>
                        <el-input v-model='ruleForm.visitHtml'></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type='primary'>save and add another</el-button>
                        <el-button type='primary'>save and continue editing</el-button>
                        <el-button type='primary' @click='submitForm("ruleForm")'>save</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import headTop from '../components/headTop'

    export default {
        data() {
            return {
                ruleForm:{
                    belongs: '11',
                    desc:'222'
                },
                typeOptions:[{
                    value:'t1',
                    label: 'pa培训'
                },{
                    value:'t2',
                    label: 'pa培训'
                },{
                    value:'t3',
                    label: 'pa培训'
                },{
                    value:'t4',
                    label: 'pa培训'
                },{
                    value:'t5',
                    label: 'pa培训'
                }],
                type:'', // 当前选中的类型
                rules: { // 必填项rules
                    type: [
                        {required:true,message: '请选择类型',trigger: 'blur'}
                    ],
                    belongs: [
                        {required: true,message: '请选择所属产品',trigger: 'blur'}
                    ],
                    desc: [
                        {required:true,message: '请填写描述',trigger: 'blur'}
                    ],
                    resource: [
                        {required:true,message: '请上传资源',trigger: 'blur'}
                    ],
                    visitHtml: [
                        {required:true,message: '请输入访问html',trigger: 'blur'}
                    ],
                },
                fileList:[], // 资源列表
                uploadForm: new FormData() // 提交对象
            }
        },
        created() {

        },
        components:{headTop},
        methods: {
            handlePreview() {},
            handleRemove() {},
            beforeRemove() {},
            success(response, file, fileList) {

            },
            submitForm(formName) { 
                this.$refs[formName].validate( (valid) => {
                    if(valid){
                        alert('submit');  // 校验通过
                        this.formName.append('type',this.ruleForm.type);
                        this.formName.append('belongs',this.ruleForm.belongs);
                        this.formName.append('desc',this.ruleForm.desc);
                        this.formName.append('resource',this.ruleForm.resource);
                        this.formName.append('visitHtml',this.ruleForm.visitHtml);

                        // 调用提交接口
                    }else {
                        console.log('error submit');
                        return false;
                    }
                })
            }
        }
    }
</script>

<style lang='less' scoped>
    @import '../style/mixin';
    .form {
        min-width: 400px;
		margin-bottom: 30px;
		&:hover{
			box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
			border-radius: 6px;
			transition: all 400ms;
		}
    }
    .form_header {
        text-align: left;
        margin: 0 0 20px 25px;
    }
</style>
