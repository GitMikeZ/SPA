(function($) {
    $.snowfall = {
        intervals: [],
        $wrapper: null,
        start: function(options, $wrapper) {
            var options = $.extend({}, {
                size: {
                    min: 10,
                    max: 20
                },
                interval: 500,
                color: '#fff',
                content: '&#10052;',
                disappear: 'linear'    
            }, options);

            if($wrapper == undefined) {
                $('body').append('<div id="snowfall-wrapper"/>');
                $wrapper = $('#snowfall-wrapper');

                $wrapper.css({
                    'overflow': 'hidden',
                    'height': '100%',
                    'width': '100%',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                });
            }

            var $snowfall = $('<div class="flake"/>').css({
                'position': 'absolute',
                'top': '-50px',
            }).html(options.content);

            $.snowfall.$wrapper = $wrapper;
            $.snowfall.$wrapper.show();

            
        }
    }
})