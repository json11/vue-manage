import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')),'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')),'manage');
const home = r => require.ensure([], () => r(require('@/page/home')),'home');
const yInsurance = r => require.ensure([], () => r(require('@/page/yInsurance')),'yInsurance');
const yApply = r => require.ensure([], () => r(require('@/page/yApply')),'yApply');
const yWeb = r => require.ensure([], () => r(require('@/page/yWeb')),'yWeb');
const yInsuranceDetail = r => require.ensure([], () => r(require('@/page/yInsuranceDetail')),'yInsuranceDetail');


// meta子路由如果想要 可以跳转 则配置meta
const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/manage',
        component: manage,
        name: '',
        children: [{
            path: '',
            component: home,
            meta: []
        },{
            path: '/yInsurance',
            component: yInsurance,
            // meta: ['CAPP','一分期-保险协议'],
            meta: [{
                title:'CAPP',
                id: ''
            },{
                title:'一分期-保险协议',
                id: '01',
                path:'/yInsurance'
            }]
        },{
            path: '/yInsuranceDetail',
            component: yInsuranceDetail,
            meta: [{
                title:'CAPP',
                id: ''
            },{
                title:'一分期-保险协议',
                id: '01',
                path: '/yInsurance'
            },{
                title:'Add-一分期-保险协议',
                id: '02',
                path: '/yInsuranceDetail'
            }]
        },{
            path: '/yApply',
            component: yApply,
            meta: [{
                title:'CAPP1',
                id: ''
            },{
                title:'一分期-申请协议',
                id: '01',
                path:'/yInsurance'
            }]

        },{
            path: '/yWeb',
            component: yWeb,
            meta: ['CAPP2','一分期-网页'],
            meta: [{
                title:'CAPP2',
                id: ''
            },{
                title:'一分期-保险协议',
                id: '01',
                path:'/yInsurance'
            }]
        }]
    }
]

export default new Router({
    routes,
    strict:process.env.NODE_ENV !== 'production'
})