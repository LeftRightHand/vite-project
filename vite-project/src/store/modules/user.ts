import { loginFormData, loginResponseData } from '@/api/type'
import { requestLogin, requestUserInfo } from '@/api/user'
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
                this.token = result.data.token
                console.log(result)
                SET_TOKEN(result.data.token)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.token))
            }
        },
        async userInfo() {
            let result = await requestUserInfo();
            if (result.code = 200) {
                this.username = result.data.checkUser.username
                this.avatar = result.data.checkUser.avatar
            }
        },
        userLogout() {
            this.token = '';
            this.username = '';
            this.avatar = '';
            REMOVE_TOKEN();
        }
    },
    getters: {

    }
})

export default useUserStore