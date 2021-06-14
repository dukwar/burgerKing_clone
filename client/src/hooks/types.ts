import {requestType} from "./request.hook"


export type useRequestType = {
    request: (url:string, method:string, body?:any, headers?:any) => Promise<any>
}

export type useAuthType = {
    login: (jwtToken:string, userId:string) => void,
    logout: () => void,
    storageName: string
}