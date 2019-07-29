import {Login} from './reexport.js';
import {Slider} from './reexport.js';
import {Tabs} from './reexport.js';


const tabs = new Tabs();
const newSlider = new Slider();
const newLogin = new Login();



function init(){
  newSlider.init();
}

init();