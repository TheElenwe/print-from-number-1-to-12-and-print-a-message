daynight=0
step=1

let counter=setInterval(function(){
    
   if (daynight<0 || daynight>12){
    
    step *=-1
    daynight +=step    
     
    console.log("Counter has reached upper or lower limit")
    
    }

    else {
      console.log(daynight)
    }

   daynight+=step

},500)