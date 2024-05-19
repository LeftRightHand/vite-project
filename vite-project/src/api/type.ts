export interface loginFormData {
    username: string,
    password: string
}

interface dataType {
    token: string
}

export interface ResponseData {
    code: number,
    message: string,
    ok:boolean
}

export interface loginResponseData extends ResponseData {
    data: string
}


export interface userResponseData extends ResponseData {
    data: {
        routes: string[],
        buttons: string[],
        roles: string[],
        name: string,
        avatar: string
    }
}