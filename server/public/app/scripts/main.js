/*global public, $*/

window.public = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
    }
};

$(document).ready(function () {
    // 'use strict';
    public.init();

    window.positions = {};

    $.post('/config/' + window.id, 
        {width: $(window).width(), height:$(window).height()},
        function(ret){
            console.log(ret);
    });



    $( ".rect" ).animate({
      left : $(window).width() + "px"
    }, 1000, "linear", function() {
        
        var position = {
            $( ".rect" ).position().top,
            $( ".rect" ).position().left
        };

        $.post('/position/' + window.id, 
            { positions : position, statue : 'done'},
            function(ret){
                console.log(positions);

        });


    });

});



