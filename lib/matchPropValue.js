/**
 * author: zto
 */

/**
 * 匹配属性值：从一个对象数组，中找出参数propName为propValue的对象进行返回
 * @param {String} propName 
 * @param {String|Number|Boolean} propValue 
 * 
  const arr = [{id:1,name:"zto"},{id:2,name:"zzz"},{id:3,name:"ttt"}]
  const obj = arr.matchPropValue("name","ttt");
  console.log(obj);// {id:3,name:"ttt"}
 * 
 */
Array.prototype.matchPropValue = function (propName, propValue) {
    if(Object.prototype.toString.call(propName) == "[object String]"){
        const arrNew = this.filter(function(item){
            return item[propName]==propValue;
        });
        return arrNew[0];
    }else{
        console.warn("参数错误：matchPropValue(String，String|Number|Boolean)");
    }
}