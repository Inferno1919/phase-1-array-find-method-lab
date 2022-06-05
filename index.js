


function superbowlWin(array){
    
    let win = array.find(array => array.result === "W");

  if(typeof win == 'undefined'){
        return win;
  }else{
      return win.year;
  }
  

}
