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
// /*global public, $*/

// $(document).ready(function () {
//   'use strict';
//   public.init();

//   window.positions = {};

//   $.post('/config/' + window.id, 
//     {width: $(window).width(), height:$(window).height()},
//     function(ret){
//       console.log(ret);
//   });


//   setInterval(function(){
//     $.get('/positions', function(ret){

//       if (ret['0'].position.statue === 'done'){

//           $(".rect").animate({left : $(window).width() + "px"}, 
//             1000, "linear", 

//             function() {
            
//               var position = {
//                 top : $(".rect").position().top,
//                 left : $(".rect").position().left,
//                 statue : 'done'
//               };

//               $.post('/position/' + window.id, 
//                   position,
//                   function(ret){
//                     console.log(positions);
//                   }
//               );
//             }
//           );

//       }
//     });
//   }, 500);

  

  

// });




// /*global public, $*/

// $(document).ready(function () {
//   'use strict';
//   public.init();

//   window.positions = {};

//   $.post('/config/' + window.id, 
//     {width: $(window).width(), height:$(window).height()},
//     function(ret){
//       console.log(ret);
//   });


//   setInterval(function(){
//     $.get('/positions', function(ret){

//       if (ret['0'].position.statue === 'done'){

//           $(".rect").animate({left : $(window).width() + "px"}, 
//             1000, "linear", 

//             function() {
            
//               var position = {
//                 top : $(".rect").position().top,
//                 left : $(".rect").position().left,
//                 statue : 'done'
//               };

//               $.post('/position/' + window.id, 
//                   position,
//                   function(ret){
//                     console.log(positions);
//                   }
//               );
//             }
//           );

//       }
//     });
//   }, 500);

  

// });



