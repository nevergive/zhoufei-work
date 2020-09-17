/*
 * @Author: your name
 * @Date: 2020-09-17 18:12:43
 * @LastEditTime: 2020-09-17 18:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhoufei-work/src/storage/index.js
 * 设置缓存
 */
const STORAGE_KEY = 'mall'
export default {
    setItem(key,value,module_name){
        if(module_name){
            let val =this.getItem(module_name)
            val[key] = value
            this.setItem(module_name,val)
        }else{
            let val =this.getStorage()
            console.log(val)
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
       
    },
    getItem(key,module_name){
        if(module_name){
            let value =this.setItem(module_name)
            if(value) return value[key]
        }
        return this.getStorage()[key];
    },
    getStorage(){
        return  JSON.parse( window.sessionStorage.getItem(STORAGE_KEY)||'{}')
    },
    clear(key,module_name){
        let value = this.getStorage()
        if(module_name){
            delete value[module_name][key]
        }else{
            delete value[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(value))
    }
}