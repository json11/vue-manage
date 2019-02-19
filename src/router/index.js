import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')),'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')),'manage');
const home = r => require.ensure([], () => r(require('@/page/home')),'home');

const SMproduct = r => require.ensure([], () => r(require('@/page/SMproduct')),'SMproduct');
const productList = r => require.ensure([], () => r(require('@/page/productList')),'productList');
const downloadList = r => require.ensure([], () => r(require('@/page/downloadList')),'downloadList');
const emailList = r => require.ensure([], () => r(require('@/page/emailList')),'emailList');

const upload = r => require.ensure([], () => r(require('@/page/upload')),'upload');

const detail = r => require.ensure([], () => r(require('@/page/detail')),'detail');




// meta子路由如果想要 可以跳转 则配置meta
const routes = [
    {
        path: '/',
        redirect: {
            path: '/login'
        },
    },
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        path: '/manage',
        component: manage,
        children: [{
            path: '',
            component: home,
            meta: []
        },{
            path: '/SMproduct',
            component: SMproduct,
            meta: [{
                title:'ALPS',
                id: '1-1'
            },{
                title:'产品',
                id: '1-2',
                path:'/SMproduct'
            }]
        }, {
            path: '/productList',
            component: productList,
            meta: [{
                title:'ALPS',
                id: '2-1'
            },{
                title:'产品',
                id: '2-2',
                path:'/SMproduct?flag=/productList&isDivide=true'
            },{
                title:'产品列表',
                id: '2-3',
                path:'/productList'
            }]
        }, {
            path: '/downloadList',
            component: downloadList,
            meta: [{
                title:'ALPS',
                id: '3-1'
            },{
                title:'产品',
                id: '3-2',
                path:'/SMproduct?flag=/downloadList&isDivide=false'
            },{
                title:'邮件配置列表',
                id: '3-3',
                path:'/downloadList'
            }]
        }, {
            path: '/emailList',
            component: emailList,
            meta: [{
                title:'ALPS',
                id: '4-1'
            },{
                title:'产品',
                id: '4-2',
                path:'/SMproduct?flag=/emailList&isDivide=false'
            },{
                title:'邮件配置列表',
                id: '4-3',
                path:'/emailList'
            }]
        }, {
            path: '/upload',
            component: upload,
            meta: [{
                title:'ALPS',
                id: '5-1'
            },{
                title:'文件上传',
                id: '5-2',
                path:'/upload'
            }]
        },{
            path: '/detail',
            component: detail,
            meta: [{
                title:'ALPS',
                id: '5-1'
            },{
                title:'产品',
                id: '5-2',
                path: '/SMproduct?flag=/productList',
            },{
                title:'产品列表',
                id: '5-3',
                path: '/productList'
            },{
                title:'add',
                id: '5-4',
                path: '/detail'
            }]
        }]
    }
]

export default new Router({
    routes,
    strict:process.env.NODE_ENV !== 'production'
})
