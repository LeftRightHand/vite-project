import request from '@/utils/request';
import { loginFormData, loginResponseData } from '../type';

enum API {
    LOING_URL = "/user/login/",
}

export const requestLogin = (data: loginFormData) => request.post<any, loginResponseData>(API.LOING_URL, data)