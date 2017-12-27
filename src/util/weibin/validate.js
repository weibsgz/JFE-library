/**
* 表单验证JS。
* isNotNul： 判断是不为null和undefined和空
* stringCheck： 只能包括中文、英文字母、数字和下划线
* phoneCheck : 验证手机号格式
* emailCheck： 验证邮箱格式
* 
* @memberof  util
*
 * @example
 *    JFE.util.checkTools.isNotNull('') //false
 *    JFE.util.checkTools.stringCheck('aad1_Fd') //true
 *    JFE.util.checkTools.phoneCheck('123123') //false
 *    JFE.util.checkTools.emailCheck('weibin@jusfoun.com') //true
 */


 const checkTools = {
  /*判断是不为null和undefined和空*/
      isNotNull:function(str){
          //先判断是否undefined
          return (typeof(str) == undefined || str == null || str.length == 0) ? false : true;
      },
      //只能包括中文、英文字母、数字和下划线
      stringCheck : function(str){
          var ruleStr=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
          return  this.isNotNull(str) && ruleStr.test(str);
      },
       //验证手机号
     phoneCheck : function(str){
        var ruleStr=/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
        return  this.isNotNull(str) &&  ruleStr.test(str);
     },
     //验证邮箱
     emailCheck : function(str){
        var ruleStr=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return  this.isNotNull(str) && ruleStr.test(str);
    }
}


export {checkTools}
