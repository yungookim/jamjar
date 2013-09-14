$(document).ready(function () {
  // 'use strict';

  window.myDataRef = new Firebase('https://hackathon234.firebaseio.com/');

  window.state = -1;
  //myDataRef.set(0);
  window.myDataRef.on('value', function(snapshot) {
    // console.log(snapshot.val());
    window.state = snapshot.val();


    window.soundInt = setInterval(function(){

      if (window.id === 0){
      // t9
        if ($('body').hasClass('t9')){
          window.Sound.setVolume(100);
        } else {
          window.Sound.setVolume(0);
        }
      } else if (window.id === 1) {
      // t10
        if ($('body').hasClass('t10')){
          window.Sound.setVolume(100);
        } else {
          window.Sound.setVolume(0);
        }
      } else if (window.id === 3) {
        // t11
        if ($('body').hasClass('t11')){
          window.Sound.setVolume(100);
        } else {
          window.Sound.setVolume(0);
        }
      }

      if ($('body').hasClass('t12')){
        window.Sound.setVolume(0);
        window.Sound.stop();
        window.clearInterval(window.soundInt);
      }

    }, 1000);


    

    // t12 stop everything

    if (window.state > -1) {
      $('body').addClass('t' + window.state);  
    }
  });

});