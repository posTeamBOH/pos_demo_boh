import { request, config } from '../utils'

const { api } = config
const { good } = api

export async function query (params) {
    console.log('成功')
    // return request({
    //     url: good,
    //     method: 'get',
    //     data: params,
    // })
}

export async function create (params) {
    return request({
        url: good,
        method: 'post',
        data: params,
    })
}

export async function remove (params) {
    return request({
        url: good,
        method: 'delete',
        data: params,
    })
}

export async function update (params) {
    return request({
        url: good,
        method: 'patch',
        data: params,
    })
}
