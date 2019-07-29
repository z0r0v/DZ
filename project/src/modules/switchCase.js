 
  //Замененный switchCase
  const htmlElements = {
    masterInfo: document.querySelector(".masterInfo"),
    autoInfo:document.querySelector(".autoInfo"),
  };

  const modeList = {
    "Master":htmlElements.masterInfo.classList.remove("hidden"),
    "Auto": htmlElements.autoInfo.classList.remove("hidden"),
    };



 class switchCase{
   constructor(elementDataAttribute){
  
    if(elementDataAttribute in modeList) {
      console.log(123);
      modeList[elementDataAttribute];
    }else{
      throw new Error('Error in onTabsClick module tabs str 33')
    };
    
   };

  };

  export { switchCase }; 