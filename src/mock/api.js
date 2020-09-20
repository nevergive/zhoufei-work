/*
 * @Author: your name
 * @Date: 2020-09-17 20:02:03
 * @LastEditTime: 2020-09-20 15:19:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhoufei-work/src/mock/api.js
 */
import Mock ,{Random}from 'mockjs'
Mock.mock('/api/user/login',{
    "status":0,
    "data":{
        "id":12,
        "username":"admin",
        "email":""
    }
})
import imgPhone from'./../../public/images/phone.webp'
Mock.mock('/api/user/productList',{
    "status":200,
    "data|7":[{
        "id|+1":1,
        "name":"@ctitle(2,5)",
        "phonelist|10":[{"id|+1":1,"phonename":"@ctitle(2,5)","img":imgPhone,"product":"@ctitle(3,5)","price":"@integer(1000,8000)"}],
    }]
})