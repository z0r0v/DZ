import {Login} from './login.js'
import {Slider} from './slider.js'
import {Tabs} from './tabs.js'

const tabs = new Tabs();
const newSlider = new Slider();
const newLogin = new Login();


function init(){
  // newLogin.init();
  newSlider.init();
}

init();