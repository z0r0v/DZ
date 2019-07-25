import { Logger } from "./logger.js";

class Xhr1{
    constructor(name){
        this.name = name;
    };
    run = (url)=>{
        const before = new Date().getTime();
        return new Promise((resolve, reject)=>{
            const _self = this;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = () =>{
                const after = new Date().getTime();
                resolve(new Logger(_self.name, before, after));
            };
            xhr.send();
        });
    };
}

export { Xhr1 };