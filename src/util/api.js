// 配置API接口地址
let root = process.env.BASE_API
import axios from 'axios'



// const service = axios.create({
//     baseURL:root , // api的base_url
//     timeout: 15000 // 请求超时时间
// })
// service.defaults.headers['Content-Type'] = 'application/json;charset=utf-8;application/x-www-form-urlencoded'
// service.interceptors.request.use(config => {
//
//     if (config.method === 'post') {
//             console.log('get')
//         // config.data = qs.stringify(config.data, {arrayFormat: 'brackets'})
//
//         return config
//     }
//     // if (store.getters.token) {
//     //     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     // }
//     return config
// }, error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
// })
//
// service.interceptors.response.use(
//     response=>{
//         return response
//     }
// )
// service.interceptors.response.use(
//     response => {
//         /**
//          * code为非20000是抛错 可结合自己业务进行修改
//          */
//         const res = response
//         if (res.status === 200||res.status === 304||res.status === 400 ) {
//
//
//
//
//         } else {
//
//             return Promise.reject('error')
//         }
//     },
//     error => {
//         // console.log(error)// for debug
//         Message({
//             message: '用户不存在',
//             type: 'error',
//             duration: 5 * 1000
//         })
//         return Promise.reject(error)
//     }
// )
//






// 自定义判断元素类型JS
function toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
    if (params) {
        params = filterNull(params)
    }

    // http request 请求拦截器，有token值则配置上token值



    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: root,
        withCredentials: false
    })
        .then(function (res) {

            if (res.status === 200||res.status === 304||res.status === 400) {
                if (success) {
                    if(res.data.error_code){
                        failure(res.data)
                    }else {
                        success(res.data)
                    }

                }
            }
        })
        .catch(function (err) {
            let res = err.response
            if (err) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
}

// 返回在vue模板中的调用接口
export default {
    get: function (url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}