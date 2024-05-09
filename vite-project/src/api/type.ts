export interface loginFormData {
    username: string,
    password: string
}

interface dataType {
    token: string
}

export interface loginResponseData {
    code: number,
    data: dataType
}

interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: [],
    buttons: [],
    routes: [],
    token: string,
}

interface user {
    checkUser: userInfo
}

export interface userResponseData {
    code: number,
    data: user
}