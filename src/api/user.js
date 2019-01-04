import request from '@/libs/http/index'

export function list(data) {
    return request({
        url: '/user/index',
        method: 'post',
        data: data,
    })
}

export function add() {
    return request({
        url: '/user/create',
        method: 'post',
        data: data,
    })
}
