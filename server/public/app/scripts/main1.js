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



