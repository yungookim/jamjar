$(document).ready(function () {
  // 'use strict';

  window.myDataRef = new Firebase('https://hackathon234.firebaseio.com/');

  window.state = -1;
  //myDataRef.set(0);
  window.myDataRef.on('value', function(snapshot) {
    console.log(snapshot.val());
    window.state = snapshot.val();

    if (window.id === 0){
    // 

    } else if (window.id === 1) {

    } else if (window.id === 3) {

    }

    if (window.state > -1) {
      $('body').addClass('t' + window.state);  
    }
  });

});