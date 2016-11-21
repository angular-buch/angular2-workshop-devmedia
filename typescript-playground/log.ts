export function Log(message: string) {
    return function (target, key = null, descriptor = null) {

        target.prototype.MESSAGE = message;

        console.log(message, target, key, descriptor);
    }

}    
