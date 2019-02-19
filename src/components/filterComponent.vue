<template>
    <div class='filter-container'>
        <router-link :to="jumpUrl">
            <el-button round size='small'>ADD 配置参数 </el-button>
        </router-link>

        <div class='filterList'>
            <div class='filter-tip'>FILTER</div>
            <div class='content'>
                <div class='filter-title'>By{{filterTitle}}</div>
                <template v-for='(item,index) in filterList'>
                    <a @click='filterFn(item.code)'>{{item.label}}</a>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jumpUrl:'/yInsurance',
                filterTitle: '类型',
                filterList:[{
                    code:'001',
                    label: 'pa提交成功'
                },{
                    code:'002',
                    label: '保险详情'
                },{
                    code:'003',
                    label: '订单进度'
                },{
                    code:'004',
                    label: '审核详情'
                },{
                    code:'005',
                    label: '提前结清'
                },{
                    code:'006',
                    label: '逾期还款'
                },{
                    code:'007',
                    label: 'pa培训'
                },{
                    code:'008',
                    label: '常见问题'
                },{
                    code:'009',
                    label: '我的银行卡'
                },{
                    code:'0010',
                    label: '绑卡信息'
                }],
            }
        },
        mounted() {

        },
        methods: {
            filterFn(code) {
                this.$emit('filterFn',code);
            }
        }
    }

</script>

<style lang='less'>
    .filterList {
        margin-top: 15px;
        margin-right:25px;
        padding-bottom: 30px;
        text-align:center;
        font-size: 13px;
        background: #f8f8f8;
        .filter-tip {
            background: #79aec8;
            color: #fff;
        }
        .content {
            .filter-title {
                color: #666;
            }
            a {
                display:block;
                color: #999;
                padding: 5px 10px 0;
                word-break: keep-all;
            }
            a:hover {
                color: #036;
            }
            a:visit {
                color: #447e9b;
            }
        }
    }
    
</style>
