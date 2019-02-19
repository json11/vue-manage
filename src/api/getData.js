import fetch from '@/config/fetch'

/**
 * 登陆
 */
export const login = data => fetch({url:'/alps/api-token-auth',data,type:'POST'});

/**
 * 退出
 */
export const signout = () => fetch('/admin/singout');

/**
 * 获取产品组
 */
export const getProductType = () => fetch({url:'/alps/admin_group',});

/**
 *  获取对应产品列表
 */
export const getProductList = (data) => fetch({url:'/alps/admin_app_list',data,type:'POST',contentType:'formData'});

/**
 *  获取对应下载页列表
 */
export const getDownloadList = (data) => fetch({url: '/alps/admin_app_download_list',data,type:'POST',contentType:'formData'})

/**
 *  获取邮件列表
 */

export const getEmailList = (data) => fetch({url: '/alps/admin_app_email_config_list',data,type:'POST',contentType:'formData'})