(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {

    var settings = $.extend({
      'menu': ('#menu'),
      'push': ('.push'),
      'side': 'left',
      'menuWidth': '15.625em',
      'speed': '300'
    }, options);

    var menuLink = this,
        menu = $(settings.menu),
        push = $(settings.push),
        width = settings.menuWidth;

    var positionOffScreen = {
      'position': 'fixed',
      'top': '0',
      'bottom': '0',
      'width': settings.menuWidth,
      'height': '100%'
    };

    var animateSlide = {
      '-webkit-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-moz-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-ms-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-o-transition': settings.side + ' ' + settings.speed + 'ms ease',
      'transition': settings.side + ' ' + settings.speed + 'ms ease'
    };

    menu.css(positionOffScreen);
    menu.css(settings.side, '-' + settings.menuWidth);
    push.css(settings.side, '0');
    menu.css(animateSlide);
    push.css(animateSlide);

    menu._state = 'closed';

    menu.open = function() {
      menu._state = 'open';
      menu.css(settings.side, '0');
      push.css(settings.side, width);
    };

    menu.close = function() {
      menu._state = 'closed';
      menu.css(settings.side, '-' + width);
      push.css(settings.side, '0');
    };

    menuLink.on('click.bigSlide', function(e) {
      e.preventDefault();
      if (menu._state === 'closed') {
        menu.open();
      } else {
        menu.close();
      }
    });

    menuLink.on('touchend', function(e){
      menuLink.trigger('click.bigSlide');
      e.preventDefault();
    });

    return menu;

  };

}(jQuery));