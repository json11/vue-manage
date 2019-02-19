<template>
    <div class='manage_page fillcontain'>
        <el-row style="height: 100%;margin-top:0;">
            <el-col :span="4" style='min-height:100%;background-color:rgb(50, 64, 87); '>
                <el-menu :default-active='defaultActive' style='min-height:100%;' background-color="#324157" text-color='#bfcbd9' color='#bfcbd9' router>
                    <el-menu-item index='manage'><i class='el-icon-menu'></i>首页</el-menu-item>
                    <el-submenu index='2'>
                        <template slot='title'><i class='el-icon-document'></i>ALPS</template>
                        <el-menu-item index='SMproduct' disabled>产品</el-menu-item>
                        <el-menu-item index='productList' >产品列表</el-menu-item>
                        <el-menu-item index='downloadList' >app下载页列表</el-menu-item>
                        <el-menu-item index='emailList' >邮件配置列表</el-menu-item>
                        <el-menu-item index='upload' >文件上传</el-menu-item>
                    </el-submenu>
                    <el-submenu index='3'>
                        <template slot='title'><i class='el-icon-plus'></i>添加数据</template>
                        <el-menu-item index='SMproduct'>ADD APP</el-menu-item>
                        <el-menu-item index='SMproduct'>ADD 邮件人员配置</el-menu-item>
                        <el-menu-item index='SMproduct'>ADD 下载页面配置</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span='20' style='height:100%;overflow:auto;'>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    
    // 在此组件中 将产品组数据 请求到
    export default {
        data() {return{}},
        computed: {
            defaultActive: function() {
                let _index = '';
                let _path = this.$route.path;
                _index = _path && _path.split('/')[1];
                _index = _index.split('?')[0];

                return _index;
            },
        },
        created() {
            this.$store.dispatch('getAdminGroup');
        },

    }
</script>

<style lang='less' scoped>
    @import '../style/mixin';
    .manage_page {
        .el-submenu {
            .el-menu-item {
                background-color:#1f2d3d!important;
            }
        }
    }
</style>