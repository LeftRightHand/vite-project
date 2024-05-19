import { loginFormData, loginResponseData } from '@/api/type'
import { requestLogin, requestLogout, requestUserInfo } from '@/api/user'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'

import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(),
            menuRoutes: constantRoute,//路由器的数组
            username: '',
            avatar: ''
        }
    },
    actions: {
        async userLogin(data: loginFormData) {
            let result: loginResponseData = await requestLogin(data)
            if (result.code == 200) {
                this.token = result.data
                console.log(result)
                SET_TOKEN(result.data)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        async userInfo() {
            let result = await requestUserInfo();
            if (result.code = 200) {
                this.username = result.data.name
                this.avatar = result.data.avatar
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        async userLogout() {
            let result = await requestLogout();
            if (result.code == 200) {
                this.token = '';
                this.username = '';
                this.avatar = '';
                REMOVE_TOKEN();
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message));
            }
        }
    },
    getters: {

    }
})

export default useUserStore