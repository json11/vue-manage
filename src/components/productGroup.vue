<template>
    <div class='productsContainer' v-show='isShow'>
        <div class='tips'>
            <el-alert
                v-if="!applicationId"
                title="您目前还没有选择APP 产品 请选择！"
                type="warning"
                show-icon>
            </el-alert>
            <el-alert
                v-else
                :title="currentApp"
                type="success"
                show-icon>
            </el-alert>
        </div>
        <div class='wrapper'>
            <div class='card'
                v-for='(item,index) in appList'
                :key="index"
            >
                <el-card :bord-style='{padding:"0px",margin:"30px auto",textAlign:"center"}'>
                    <img :src='item.picUrl' class='image'/>
                    <p>{{item.group_name}}</p>
                    <p>IOSVERSION--{{item.ios_dic.version}}</p>
                    <p>AndroidVERSION--{{item.android_app.version}}</p>
                    <div class='btnContainer'>
                        <template v-if='isDivide'>
                            <el-button type="primary" plain @click='handleSelect(item.ios_dic.application_id)' :autofocus='item.ios_dic.application_id == applicationId'>ios</el-button>
                            <el-button type="success" plain @click='handleSelect(item.android_app.application_id)' :autofocus='item.android_app.application_id == applicationId'>Android</el-button>
                        </template>
                        <template v-else>
                            <el-button type="primary" plain @click='handleSelect(item.ios_dic.application_id)' :autofocus='item.ios_dic.application_id == applicationId'>select</el-button>
                        </template>
                    </div>

                </el-card>
            </div>

        </div>

    </div>
</template>

<script>
    // 此组件  用来做过滤条件  做成纯组件 不含业务逻辑
    // 有两种情况 会调用此组件  1 nav导航 跳转的的选择产品页  2 当前列表页 点击选择按钮出现的产品页
    export default {
        name: 'productGroup',
        data() {
            return {
                group:[]
            }
        },
        props:{
            appList: { // 产品
                type: Array,
                require: true,
                default() {
                    return []
                }
            },
            applicationId: {
                type: String,
                require:true
            },
            isShow: {
                type: Boolean,
                required: true,
                default() {
                    return true
                }
            },
            isDivide: { // 是否分组
                type: Boolean,
                require: true,
                default() {
                    return false
                }
            }
        },
        computed: {
            currentApp: function() {
                let _name = this._getCurApp(this.appList,this.applicationId);
                return '您当前选择的产品是' + _name
            }
        },
        created() {
            // 此周期内 可以做数据处理
            this.initData();
        },
        mounted() { window.vm = this;
            // dom 节点已经生成
            console.log('---',this.appList,'++',this.applicationId);
        },
        methods: {
            // 处理appGroup 数据 加上图片
            _handleProData(data) {
                if(!data || !data.length) {
                    throw('data must be array')
                }
                data.map( (item,index) => {
                    let _type = item.group_type;

                    // switch(_type) {
                    //     case 'dealers':
                    //         item['picUrl'] = require('../assets/img/dealers.png');
                    //         break;
                    //     case 'spurs':
                    //         item['picUrl'] = require('../assets/img/spurs.png');
                    //         break;
                    //     case 'fkh':
                    //         item['picUrl'] = require('../assets/img/fkh.png');
                    //         break;
                    // }
                    switch(_type) {
                        case 'dealers':
                            item['picUrl'] = 'http://pat.pa.com/files/dealers/app_icons/3.36.0_20180511194137.png';
                            break;
                        case 'spurs':
                            item['picUrl'] = 'http://pat.pa.com/files/spurs/app_icons/3.6.0_20180516210040.png';
                            break;
                        case 'fkh':
                            item['picUrl'] = 'http://pat.pa.com/files/fkh/download/20180330192255/images/bg.png';
                            break;
                    }
                });
                console.log('add pic：',data);
                return data;
            },
            // 找到之前点击的产品版本
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
            initData() {
                this.group = this.appList && this.appList.length && this._handleProData(this.appList);
            },
            handleSelect(id) {
                this.$emit('handleSelectFn',id);
            },
        },
    }
</script>

<style lang='less' type="text/less" scoped>
    .productsContainer {
        width:100%;
        position:relative;
        .tips {
            margin-top:20px;
        }
        .wrapper {

            display: -webkit-flex;
            display:flex;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;

            width:100%;
            margin-top: 15px;
            z-index:99;
            background:#fff;
            .card {

                -webkit-flex: 1;
                -ms-flex: 1;
                flex:1;
                -webkit-box-flex: 1 ;
                -moz-box-flex: 1;

                padding:20px;
                .image {
                    display: block;
                    width: 200px;
                    height: 200px;
                    margin: 0 auto;
                }
                .btnContainer {
                    margin-top:10px;
                    text-align:center;
                }
                p {
                    padding:5px;
                    text-align:center;
                    background: #909399;
                    color:#FFF;
                    &:first-of-type {
                        margin-top:10px;
                    }
                }
            }
        }
    }

    .active-ios {
        color: #fff;
        background-color: #409EFF;
        border-color: #409EFF;
    }
    .active-android {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
    }

</style>
