export function isFunction(fn){
    return Object.prototype.toString.call(fn) == "[object AsyncFunction]" || Object.prototype.toString.call(fn) == "[object Function]"
}
export function isArray(fn){
    return Object.prototype.toString.call(fn) == "[object Array]"
}
export function isObject(fn){
    return Object.prototype.toString.call(fn) == "[object Object]"
}
export function isString(fn){
    return Object.prototype.toString.call(fn) == "[object String]"
}
export function isNumber(fn){
    return Object.prototype.toString.call(fn) == "[object Number]"
}
export function isBoolean(fn){
    return Object.prototype.toString.call(fn) == "[object Boolean]"
}
    
