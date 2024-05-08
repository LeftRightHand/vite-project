import { loginFormData, loginResponseData } from '@/api/type'
import { requestLogin } from '@/api/user'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'

import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(),
            menuRoutes: constantRoute,//路由器的数组
        }
    },
    actions: {
        async userLogin(data: loginFormData) {
            let result: loginResponseData = await requestLogin(data)
            if (result.code == 200) {
                this.token = result.data.tolen
                console.log(result)
                SET_TOKEN(result.data.token)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data))
            }
        }
    },
    getters: {

    }
})

export default useUserStore