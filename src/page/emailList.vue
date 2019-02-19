<template>
    <div class='fillcontainer'>

        <product-group
            :applicationId='applicationId'
            :appList='group'
            :isShow='isShow'
            :isDivide = 'isDivide'
            @handleSelectFn='handleSelect'
        >
        </product-group>

        <div class='content' v-show='!isShow'>
            <head-top :flag= 'flag'></head-top>
            <!--<search @searchFn='searchFn'></search>-->
            <el-alert
                :title="currentApp"
                type="success"
                style="margin-top: 10px"
                show-icon>
            </el-alert>
            <div class='table_container'>
                <el-table
                    border
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    :highlight-current-row=true
                    @selection-change="handleSelectionChange"
                    style="width:100%"
                >
                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column
                        prop='id'
                        label='ID'
                        width ='100'>
                    </el-table-column>
                    <el-table-column
                        prop='name'
                        label='用户名'
                        width ='90'>
                    </el-table-column>
                    <el-table-column
                        prop='email'
                        label='邮件地址'
                        width='220'>
                    </el-table-column>
                    <el-table-column
                        prop='environment'
                        label='环境'
                        width='220'>
                    </el-table-column>
                    <el-table-column
                        prop='mobile_application_group'
                        label='MOBILE_APPLICATION_GROUP'
                        width='220'>
                    </el-table-column>
                </el-table>
                <div class='Pagination' style='text-align: left;margin-top: 10px;'>
                    <el-pagination
                        :total='total'
                        :page-size='pageSize'
                        :current-page='pageNo'
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        layout='total, prev, pager, next'
                    >

                    </el-pagination>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import productGroup from '../components/productGroup'
    import headTop from '../components/headTop'

    import {getEmailList} from '@/api/getData'
    import search from '../components/search'

    import {mapActions, mapState,mapGetters} from 'vuex'

    // import {baseImgPath} from '../config/env'

    export default {
        name: 'emailList',
        data() {
            return {
                loading: true,
                tableData:[],
                pageSize:5,
                pageNo:0,
                total:0,
                successImgPath:'http://pat.pa.com/static/admin/img/icon-yes.svg',
                failImgPath:'http://pat.pa.com/static/admin/img/icon-no.svg',
                isShow: true,
                isDivide: false, // 是否分组  -- 不区分applicationId 返回的列表不一样
                // applicationId:'', //当前列表是否做过applicationId过滤
                flag: '/SMproduct?flag=/emailList&isDivide=false'
            }
        },
        computed: {
            ...mapGetters(['adminInfo','group','applicationId']),
            // isShow: {
            //     get() {
            //         console.log('applicationId--',this.applicationId);
            //         return !this.applicationId
            //     },
            //     set(val) {
            //         return val
            //     }
            // }
            currentApp() {
                let _name = this._getCurApp(this.group,this.applicationId);
                return '您当前选择的产品是' + _name
            }
        },
        created() {
            // 判断是否请求数据
            if(!this.isShow && this.applicationId && !this.tableData.length) {
                this.getEmailData();
            }
            // 判断是否显示过滤产品组件
            if(this.$route.query && this.$route.query.source == 'select') {
                this.isShow = false
            }
        },
        mounted() {
        window.m=this;
        },
        watch: {
            'applicationId': function(val) {
                this.isShow = false;
                this.getEmailData();
            },
            'isShow': function(val) {
                if(!val) {
                    this.getEmailData();
                }
            }
        },
        methods: {
            /**
             * get 当前选择的app
             */
            _getCurApp(list,id) {
                if(!list || !list.length) {return}
                let _currentApp = '';
                list.forEach((item,index) => {
                    if(item.ios_dic.application_id == id) {
                        if(this.isDivide) {
                            _currentApp = '  <'+  item.group_name + '--ios>'
                        } else {
                            _currentApp = '  <'+  item.group_name + '> '
                        }

                    } else if(item.android_app.application_id == id) {
                        if(this.isDivide) {
                            _currentApp = '  <'+ item.group_name + '--android>'
                        }else {
                            _currentApp = '  <'+ item.group_name + '> '
                        }
                    }
                })
                return _currentApp;
            },
            handleSelect(id) {
                console.log('当前选择的产品种类--',id);
                this.isShow = false;
                // this.applicationId = id;
                this.$store.commit('SELECT_IOS_ANDROID',id)
            },
            async getEmailData() {
                let _param = {
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                    applicationId: this.applicationId,
                };

                const res = await getEmailList(_param);

                console.log('res--',res);
                this.tableData = res.data;
                this.total = res.total;

            },
            searchFn(keyword) {
                console.log('搜索条件',keyword);

                // ajax 数据
            },
            getCellClass({row, column, columnIndex}) { // 获取当前cell className

            },
            handleSelectionChange() {

            },
            handleSizeChange(val) {
                console.log(`每页${val}条`)
            },
            handleCurrentChange(val) {
                this.pageNo=val;
                this.getEmailData();
            }
        },
        components:{headTop,search,productGroup}
    }
</script>

<style lang='less' type="text/less" scoped>
    @import '../style/mixin';
    .fillcontainer {
        padding:20px;
        position: relative;
        .table_container {
            margin-top:20px;
            .el-table {
                .cell {
                    white-space: pre;
                }
            }
        }

    }

</style>
