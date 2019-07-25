import { Logger } from './logger.js';

class SyncDelay1{
    constructor(name){
        this.name = name;
        // this.seconds = 2;
    };
    run = () => {
     if(SyncDelay1.seconds === undefined){
         throw new Error('SyncDelay1.seconds is not defined');
     };
     const seconds = SyncDelay1.seconds
     const before = new Date().getTime();

     for (let j = 0; j < seconds; j++){
        for (let i = 0; i < 700000000; i++){
            let a = 321;
        };
     };
     const after = new Date().getTime();
     return new Logger (this.name, before, after);
    };
};

export { SyncDelay1 };