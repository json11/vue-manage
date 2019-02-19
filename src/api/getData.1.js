import fetch from '@/config/fetch'

/**
 * 登陆
 */
export const login = data => fetch('/alps/api-token-auth',data,'POST');

/**
 * 退出
 */
export const signout = () => fetch('/admin/singout');

/**
 * 获取用户信息
 */
export const getAdminInfo = () => fetch('/admin/info');

/**
 *  获取 产品列表
 */
// export const getProductList = (data,token) => fetch({url:'/alps/admin_app_list',data,method:'POST',token});