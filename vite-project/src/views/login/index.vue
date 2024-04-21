<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎您的到来</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input :prefix-icon="Lock" v-model="loginForm.password" type="password"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';

import useUserStore from "@/store/modules/user"
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time'

let userStore = useUserStore();

let $router = useRouter();

let loading = ref(false)

let loginForms = ref();

let loginForm = reactive({ username: 'admin', password: '111111' });

const login = async () => {
    await loginForms.value.validate();
    loading.value = true;
    try {
       await userStore.userLogin(loginForm);
       $router.push({path: '/'})
       ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `Hi,${getTime()}好`
       })
       loading.value = false;
    } catch (error) {
        loading.value = false;
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }
}

const validatorUsername = (rule: any, value: any, callback: any) => {
    if (value.length > 0) {
        callback();
    } else {
        callback(new Error('请输入你的账号'))
    }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
    if (value.length > 0) {
        callback();
    } else {
        callback(new Error('请输入你的密码'))
    }
}
//表单
const rules = {
    username: [
        { trigger: 'change', validator: validatorUsername }
    ],
    password: [
        { trigger: 'change', validator: validatorPassword }
    ]
}

</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            font-size: 20px;
            color: white;
            margin: 20px 0px;
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>