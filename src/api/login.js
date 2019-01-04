import request from '@/libs/http/index'

export function login(data) {
    return request({
        url: '/login/index',
        method: 'post',
        data: data,
    })
}