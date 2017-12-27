/**
* 判断各种数据类型。
* isArray ： 判断是否为数组
*          isDate : 判断是否为日期类型
*          isFunction ： 判断是不是函数
*          isNumber ：判断是不是数值类型
*          isObject ： 判断是不是一个对象
*          isObjectEmpty：判断对象是不是为空
* @memberof  util
* @param {*} val 要判断的值
* 
    
*          
 * @example
 * JFE.util.isType.isDate([1,2,3]) //true 
 * JFE.util.isType.isDate(new Date()) //true
 * JFE.util.isType.isObjectEmpty({}) //true
 * JFE.util.isType.isObject({}) //true
 */



const isType = {
    isArray:function(val){
        return val instanceof Array || Object.prototype.toString.call(val) === '[object Array]';
    },
    isDate:function(val){
        return val instanceof Date || Object.prototype.toString.call(val) === '[object Date]';
    },
    isFunction:function(val){
        return val instanceof Function || Object.prototype.toString.call(val) === '[object Function]';
    },
    isNumber:function(val){
         return typeof val === 'number' || Object.prototype.toString.call(val) === '[object Number]';
    },
    isObjectEmpty:function(obj){
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    },
    isObject:function(val){
        return val != null && Object.prototype.toString.call(val) === '[object Object]';
    }
}

export {isType}
