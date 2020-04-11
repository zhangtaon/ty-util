/**
 * author: zto
 */
function log(...parmas){
    if(process.env.MOCK){
        console.log(...parmas);
    }
}
export { log };