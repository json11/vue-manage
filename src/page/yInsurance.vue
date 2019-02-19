<template>
    <div class='fillcontainer'>
        <head-top></head-top>
        <el-row>
            <el-col :span='20'>
                <search @searchFn='searchFn'></search>
                <div class='table_container'>
                    <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        tooltip-effect="dark"
                        @selection-change="handleSelectionChange"
                        style="width:100%"
                    >
                        <el-table-column
                            fixed
                            type="selection"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            fixed
                            label='下载'
                            width='80'>
                        </el-table-column>
                        <el-table-column
                            fixed
                            label='预览'
                            width='80'>
                        </el-table-column>


                        <el-table-column
                            type='index'
                            label='ID'
                            width='50'>
                        </el-table-column>
                        <el-table-column
                            label='类型'
                            width='200'>
                        </el-table-column>
                        <el-table-column
                            label='地址'
                            width='220'>
                        </el-table-column>
                        <el-table-column
                            label='描述'
                            width='220'>
                        </el-table-column>
                        <el-table-column
                            label='发布版本'
                            width='220'>
                        </el-table-column>
                        <el-table-column
                            label='访问HTML'
                            width='100'>
                        </el-table-column>

                    </el-table>
                    <div class='Pagination' style='text-align: left;margin-top: 10px;'>
                        <el-pagination
                            :page-size='20'
                            layout='total, prev, pager, next'>

                        </el-pagination>
                    </div>
                </div>
            </el-col>
            <el-col :span='4'>
                <filter-component></filter-component>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import search from '../components/search'
    import filterComponent from '../components/filterComponent'

    export default {
        data() {
            return {
                tableData3:[]
            }
        },
        created() {

        },
        methods: {
            searchFn(keyword) {
                console.log('搜索条件',keyword);

                // ajax 数据
            },
            handleSelectionChange() {

            }
        },
        components:{headTop,search,filterComponent}
    }
</script>

<style lang='less' scoped>
    @import '../style/mixin';
    .table_container {
        padding: 20px;
    }
</style>
