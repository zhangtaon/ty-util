/**
 * 克隆对象 (只接受对象类型，其他类型抛出异常)
 * @author zto
 * @param  data Object
 * @returns Object
 * case1: clone("hazard_purposes")❌
 * case2: clone({a:1,b:2,c:3})✔️
 */
export const clone = data => {
    if (Object.prototype.toString.call(data) == '[object Object]') {
        return JSON.parse(JSON.stringify(data));
    } else {
        throw new Error("target:service clone() 接收的参数需要为一个对象类型");
    }
}