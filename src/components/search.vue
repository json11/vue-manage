<template>
    <div class='searchContainer demo-input-suffix'>
        <el-row :gutter='5'>
            <el-col :span='6' :offset='1'>
                <el-input
                    placeholder="请输入内容"
                    v-model="keywords">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
            <el-col :span='2' margin-top='5px'>
                <el-button type="info" size='small' @click='search'>Search</el-button>
            </el-col>
        </el-row>
    </div>



    
</template>

<script>

    export default {
        data() {
            return {
                keywords:'',
            }
        },
        methods: {
            search() {
                this.$emit('searchFn',this.keywords);
            }
        }
    }

</script>

<style lang="less">
    @import '../style/mixin';
    .el-row {
        margin-top:20px;
        .el-col {
            &:last-child {
                margin-top: 3px;
            }
        }
    }

</style>
