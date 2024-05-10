import request from '@/utils/request';
import { loginFormData, loginResponseData, userResponseData } from '../type';

enum API {
    LOING_URL = "/user/login/",
    USERINFO_URL = "/user/info"
}
//登录
export const requestLogin = (data: loginFormData) =>
     request.post<any, loginResponseData>(API.LOING_URL, data);
//用户信息
export const requestUserInfo = () => 
    request.get<any, userResponseData>(API.USERINFO_URL);

