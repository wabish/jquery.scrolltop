(function($, window, document) {
  'use strict';

  // main function
  $.fn.scrolltop = function(options) {
    if (!$.data(document.body, 'scrolltop')) {
      $.data(document.body, 'scrolltop', true);
        $.fn.scrolltop.init(options);
    }
  };

  // default options
  $.fn.scrolltop.defaults = {
    elemName: 'scrolltop',    // 元素ID
    scrollDistance: 300,      // 元素开始显示的距离 (px)
    scrollSpeed: 300,         // 回到顶部的速度 (ms)
    animationSpeed: 200       // 元素显示的速度 (ms)
  };

  // init function
  $.fn.scrolltop.init = function(options) {
    var o = $.extend({}, $.fn.scrolltop.defaults, options),
        $self;

    // create element
    $self = $('<a/>', {
      id: o.elemName,
      href: '#top',
      style: 'display:none'
    });

    $self.appendTo('body');

    // scroll event
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > o.scrollDistance) {
        $self.fadeIn(o.animationSpeed);
      } else {
        $self.fadeOut(o.animationSpeed);
      }
    });

    // click event
    $self.click(function(e) {
      e.preventDefault();

      $('html, body').stop().animate({
        scrollTop: 0
      }, o.scrollSpeed, 'linear');
    });
  };

  $.scrolltop = $.fn.scrolltop;

})(jQuery, window, document);
