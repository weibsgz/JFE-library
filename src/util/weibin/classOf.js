
/**
* 判断对象的类型
*
* @memberof  chart
* @param {*} val 要判断的值
* @author 韩凯波  <hkb@jusfoun.com>
    
*          
 * @example
 *   JFE.util.classOf({}) // 'Object' 
     JFE.util.classOf([]) // 'Array'
 */

function classOf(o) {
  if (o === null) {
    return 'Null';
  }
  if (o === undefined) {
    return 'Undefined';
  }
  // if (typeof o !== 'object' && typeof o !== 'function') {
  //   throw TypeError;
  // }
  return Object.prototype.toString.call(o).slice(8, -1);
}

export {classOf}
