<template>
    <div style='width:100%;'>
        <product-group 
            :applicationId='applicationId'
            :appList='group'
            :isShow='isShow'
            :isDivide = 'isDivide'
            @handleSelectFn='handleSelect'
        >
        </product-group>
    </div>
</template>

<script>

    import productGroup from '../components/productGroup'


    import {mapActions, mapState,mapGetters} from 'vuex'


    export default {
        name: 'SMproduct',
        data() {
            return {
                isShow: true,
            }
        },
        computed: {
            ...mapGetters(['adminInfo','group','applicationId']),
            flag: function() {
                return this.$route.query && this.$route.query.flag
            },
            isDivide: function() {
                let _isDivide = this.$route.query && this.$route.query.isDivide;

                if(_isDivide == 'true') {
                    return true;
                }else if(_isDivide == 'false') {
                    return false;
                }
            }
        },
        created() {
            // 此周期内 可以做数据处理
            this.initData();
        },
        mounted() {
            // dom 节点已经生成
        },
        methods: {
            initData() {
                console.log('路由参数',this.$route.query);
            },
            handleSelect(id) {
                console.log('当前选择的产品种类--',id);
                // this.applicationId = id;
                this.$store.commit('SELECT_IOS_ANDROID',id);
                // 如果是从面包屑 跳转过来的 那么选择完了 再跳转到对应的列表页
                if(this.flag) {
                    this.$router.push({path:this.flag,query:{source:'select'}});
                }
            },
        },
        components: {productGroup}
    }
</script>

<style lang='less'>
   
</style>