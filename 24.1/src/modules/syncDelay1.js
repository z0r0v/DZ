import { Logger } from './logger.js';

class SyncDelay1{
    constructor(name){
        this.name = name;
    };
    run = () => {
        const befor = new Date().getTime();
        for (let j = 0; j < second; j++){
            for(let i =0; i< 700000000; i++){
                let a = 321;
            };
        };
        const after = new Date().getTime();
        return new Logger(this.name, before, after);
    };
};

export { SyncDelay1 };