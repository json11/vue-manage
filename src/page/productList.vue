<template>
    <div class='fillcontainer'>

        <product-group
            :applicationId='applicationId'
            :appList='group'
            :isShow='isShow'
            :isDivide='isDivide'
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
                        prop='bundle_identifier'
                        label='bundle_identifier'
                        width ='200'>
                    </el-table-column>
                    <el-table-column
                        label='强制上线'
                        width ='100'>
                        <template slot-scope='scope'>
                            <img
                                v-if="!!scope.row.forceOnline"
                                :src = 'successImgPath'
                                alt='true'
                            />
                            <img
                                v-else
                                :src = 'failImgPath'
                                alt='false'
                            />
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop='createTime'
                        label='createTime'
                        width ='180'>
                    </el-table-column>
                    <el-table-column
                        label='历史版本'
                        width='100'>
                        <template slot-scope='scope'>
                             <img
                                v-if="!!scope.row.historyDistribution"
                                :src = 'successImgPath'
                                alt='true'
                            />
                            <img
                                v-else
                                :src = 'failImgPath'
                                alt='false'
                            />
                        </template>
                    </el-table-column>
                    <el-table-column
                        label='发布版本'
                        width='100'>
                        <template slot-scope='scope'>
                             <img
                                v-if="!!scope.row.isDistribution"
                                :src = 'successImgPath'
                                alt='true'
                            />
                            <img
                                v-else
                                :src = 'failImgPath'
                                alt='false'
                            />
                        </template>
                    </el-table-column>
                    <el-table-column
                        label='预发布版本'
                        width='100'>
                        <template slot-scope='scope'>
                             <img
                                v-if="!!scope.row.isPreDistribution"
                                :src = 'successImgPath'
                                alt='true'
                            />
                            <img
                                v-else
                                :src = 'failImgPath'
                                alt='false'
                            />
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop='name'
                        label='APP名称'
                        width ='90'>
                    </el-table-column>
                    <el-table-column
                        prop='serverVersion'
                        label='版本号'
                        width ='90'>
                    </el-table-column>
                    <el-table-column
                        prop='serviceUpdateMsg'
                        label='git 提交记录'
                        width ='200'>
                    </el-table-column>
                    <el-table-column
                        prop='size'
                        label='包大小'
                        width='100'>
                    </el-table-column>
                    <el-table-column
                        prop='updateUrl'
                        label='升级地址'
                        width ='300'>
                    </el-table-column>
                    <el-table-column
                        prop='versionCode'
                        label='唯一码'
                        width ='80'>
                    </el-table-column>
                    <el-table-column
                        prop='uuid'
                        label='uuid'
                        width ='220'>
                    </el-table-column>
                    <el-table-column
                        border
                        fixed="right"
                        label='操作'
                        width='300'
                        align='center'
                    >
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="primary"
                            @click="preView(scope.$index, scope.row)">预览</el-button>
                            <el-button
                            size="mini"
                            type="Success"
                            @click="upload(scope.$index, scope.row)">上传</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="sendMessage(scope.$index, scope.row)">发送邮件</el-button>
                        </template>
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

    import {getProductList} from '@/api/getData'
    import search from '../components/search'

    import {mapActions, mapState,mapGetters} from 'vuex'

    // import {baseImgPath} from '../config/env'

    export default {
        name: 'productList',
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
                isDivide: true, // 是否分组
                // applicationId:'', //当前列表是否做过applicationId过滤
                flag: '/SMproduct?flag=/productList&isDivide=true'
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
                this.getProductData();
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
                this.getProductData();
            },
            'isShow': function(val) {
                if(!val) {
                    this.getProductData();
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
            async getProductData() {
                let _param = {
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                    applicationId: this.applicationId,
                };

                const res = await getProductList(_param);

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
            preView(index,row) { // 预览
                console.log('row--',row);
                let _url = row.app_preview_link;
                window.open(_url,'_blank');

            },
            upload(index,row) { // 上传
                let _url = row.upload_link;
                window.open(_url,'_blank');
            },
            sendMessage(index,row) { // 发送邮件
                let _url = row.app_send_email;
                window.open(_url,'_blank');
            },
            handleSizeChange(val) {
                console.log(`每页${val}条`)
            },
            handleCurrentChange(val) {
                this.pageNo=val;
                this.getProductData();
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
