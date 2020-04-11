/**
 * author: zto
 */
export function log(...parmas){
    if(process.env.MOCK){
        console.log(...parmas);
    }
}