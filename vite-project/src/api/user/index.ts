import request from '@/utils/request';
import { loginFormData, loginResponseData, userResponseData } from '../type';

enum API {

    LOGIN_URL = '/admin/acl/index/login',
   
    USERINFO_URL = '/admin/acl/index/info',
   
    LOGOUT_URL = '/admin/acl/index/logout',
   
   }
//登录接口
export const requestLogin = (data: loginFormData) =>
     request.post<any, loginResponseData>(API.LOGIN_URL, data);
//获取用户信息
export const requestUserInfo = () => 
    request.get<any, userResponseData>(API.USERINFO_URL);
//退出登录
export const requestLogout = () => request.post<any, any>(API.LOGOUT_URL)

