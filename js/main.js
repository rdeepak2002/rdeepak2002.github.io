$(function() {
  // attach mini-previews
  $('#p1 a').miniPreview({ prefetch: 'pageload' });
  $('#p2 a').miniPreview({ prefetch: 'parenthover' });
  $('#p3 a').miniPreview({ prefetch: 'none' });
});

(function($) {
  var PREFIX = 'mini-preview';
  
  // implemented as a jQuery plugin
  $.fn.miniPreview = function(options) {
    return this.each(function() {
      var $this = $(this);
      var miniPreview = $this.data(PREFIX);
      if (miniPreview) {
        miniPreview.destroy();
      }

      miniPreview = new MiniPreview($this, options);
      miniPreview.generate();
      $this.data(PREFIX, miniPreview);
    });
  };
  
  var MiniPreview = function($el, options) {
    this.$el = $el;
    this.options = $.extend({}, this.defaultOptions, options);
    this.counter = MiniPreview.prototype.sharedCounter++;
  };
  
  MiniPreview.prototype = {
    sharedCounter: 0,
    
    defaultOptions: {
      width: 256,
      height: 144,
      scale: .25,
      prefetch: 'pageload'
    },
        
    generate: function() {
      this.createElements();
      this.setPrefetch();
    },

    createElements: function() {
      var $wrapper = $('<div>', { class: PREFIX + '-wrapper' });
      var $loading = $('<div>', { class: PREFIX + '-loading' });
      var $frame = $('<iframe>', { class: PREFIX + '-frame' });
      var $cover = $('<div>', { class: PREFIX + '-cover' });
      $wrapper.appendTo(this.$el).append($loading, $frame, $cover);
      
      // sizing
      $wrapper.css({
        width: this.options.width + 'px',
        height: this.options.height + 'px'
      });
      
      // scaling
      var inversePercent = 100 / this.options.scale;
      $frame.css({
        width: inversePercent + '%',
        height: inversePercent + '%',
        transform: 'scale(' + this.options.scale + ')'
      });

      // positioning
      var fontSize = parseInt(this.$el.css('font-size').replace('px', ''), 10)
      var top = (this.$el.height() + fontSize) / 2;
      var left = (this.$el.width() - $wrapper.outerWidth()) / 2;
      $wrapper.css({
        top: top + 'px',
        left: left + 'px'
      });
    },
    
    setPrefetch: function() {
      switch (this.options.prefetch) {
        case 'pageload':
          this.loadPreview();
          break;
        case 'parenthover':
          this.$el.parent().one(this.getNamespacedEvent('mouseenter'),
            this.loadPreview.bind(this));
          break;
        case 'none':
          this.$el.one(this.getNamespacedEvent('mouseenter'),
            this.loadPreview.bind(this));
          break;
        default:
          throw 'Prefetch setting not recognized: ' + this.options.prefetch;
          break;
      }
    },
    
    loadPreview: function() {
      this.$el.find('.' + PREFIX + '-frame')
        .attr('src', this.$el.attr('href'))
        .on('load', function() {
          // some sites don't set their background color
          $(this).css('background-color', '#fff');
        });
    },
    
    getNamespacedEvent: function(event) {
      return event + '.' + PREFIX + '_' + this.counter;
    },

    destroy: function() {
      this.$el.parent().off(this.getNamespacedEvent('mouseenter'));
      this.$el.off(this.getNamespacedEvent('mouseenter'));
      this.$el.find('.' + PREFIX + '-wrapper').remove();
    }
  };
})(jQuery);

(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();

  readMore( $('.spoiler1'), 6);
  readMore2( $('.spoiler2'), 4);
  readMore3( $('.spoiler3'), 4);
  readMore4( $('.spoiler4'), 4);
  readMore5( $('.spoiler5'), 6);

	function readMore(jObj, lineNum) {
	  if ( isNaN(lineNum) ) {
	    lineNum = 4;
	  }
	  var go = new ReadMore (jObj, lineNum);
	}
	function readMore2(jObj, lineNum) {
	  if ( isNaN(lineNum) ) {
	    lineNum = 4;
	  }
	  var go = new ReadMore2 (jObj, lineNum);
	}
	function readMore3(jObj, lineNum) {
	  if ( isNaN(lineNum) ) {
	    lineNum = 4;
	  }
	  var go = new ReadMore3 (jObj, lineNum);
	}
	function readMore4(jObj, lineNum) {
	  if ( isNaN(lineNum) ) {
	    lineNum = 4;
	  }
	  var go = new ReadMore4 (jObj, lineNum);
	}
	function readMore5(jObj, lineNum) {
	  if ( isNaN(lineNum) ) {
	    lineNum = 4;
	  }
	  var go = new ReadMore5 (jObj, lineNum);
	}

	//class
	function ReadMore(_jObj, lineNum) { 
	  var READ_MORE_LABEL = 'read more';
	  var HIDE_LABEL = 'read less';

	  var jObj = _jObj;
	  var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text1').css('line-height'),10)*lineNum) +'px';
	  var textMaxHeight = ''+jObj.children('.hidden-text1').css('height');

	  jObj.children('.hidden-text1').css('height', ''+ textMaxHeight);
	  jObj.children('.hidden-text1').css( 'transition', 'height .5s');
	  jObj.children('.hidden-text1').css('height', ''+ textMinHeight);

	  jObj.append ('<button class="read-more readMoreBtn">'+READ_MORE_LABEL+'</button>');

	  jObj.children('.read-more').click ( function() {
	    if (jObj.children('.hidden-text1').css('height') === textMinHeight) {
	      jObj.children('.hidden-text1').css('height', ''+textMaxHeight);
	      jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
	    } else {
	      jObj.children('.hidden-text1').css('height', ''+textMinHeight);
	      jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
	    }
	  });
	}
	function ReadMore2(_jObj, lineNum) { 
	  var READ_MORE_LABEL = 'read more';
	  var HIDE_LABEL = 'read less';

	  var jObj = _jObj;
	  var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text2').css('line-height'),10)*lineNum) +'px';
	  var textMaxHeight = ''+jObj.children('.hidden-text2').css('height');

	  jObj.children('.hidden-text2').css('height', ''+ textMaxHeight);
	  jObj.children('.hidden-text2').css( 'transition', 'height .5s');
	  jObj.children('.hidden-text2').css('height', ''+ textMinHeight);

	  jObj.append ('<button class="read-more readMoreBtn">'+READ_MORE_LABEL+'</button>');

	  jObj.children('.read-more').click ( function() {
	    if (jObj.children('.hidden-text2').css('height') === textMinHeight) {
	      jObj.children('.hidden-text2').css('height', ''+textMaxHeight);
	      jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
	    } else {
	      jObj.children('.hidden-text2').css('height', ''+textMinHeight);
	      jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
	    }
	  });
	}

	function ReadMore3(_jObj, lineNum) { 
	  var READ_MORE_LABEL = 'read more';
	  var HIDE_LABEL = 'read less';

	  var jObj = _jObj;
	  var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text3').css('line-height'),10)*lineNum) +'px';
	  var textMaxHeight = ''+jObj.children('.hidden-text3').css('height');

	  jObj.children('.hidden-text3').css('height', ''+ textMaxHeight);
	  jObj.children('.hidden-text3').css( 'transition', 'height .5s');
	  jObj.children('.hidden-text3').css('height', ''+ textMinHeight);

	  jObj.append ('<button class="read-more readMoreBtn">'+READ_MORE_LABEL+'</button>');

	  jObj.children('.read-more').click ( function() {
	    if (jObj.children('.hidden-text3').css('height') === textMinHeight) {
	      jObj.children('.hidden-text3').css('height', ''+textMaxHeight);
	      jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
	    } else {
	      jObj.children('.hidden-text3').css('height', ''+textMinHeight);
	      jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
	    }
	  });
	}
	function ReadMore4(_jObj, lineNum) { 
	  var READ_MORE_LABEL = 'read more';
	  var HIDE_LABEL = 'read less';

	  var jObj = _jObj;
	  var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text4').css('line-height'),10)*lineNum) +'px';
	  var textMaxHeight = ''+jObj.children('.hidden-text4').css('height');

	  jObj.children('.hidden-text4').css('height', ''+ textMaxHeight);
	  jObj.children('.hidden-text4').css( 'transition', 'height .5s');
	  jObj.children('.hidden-text4').css('height', ''+ textMinHeight);

	  jObj.append ('<button class="read-more readMoreBtn">'+READ_MORE_LABEL+'</button>');

	  jObj.children('.read-more').click ( function() {
	    if (jObj.children('.hidden-text4').css('height') === textMinHeight) {
	      jObj.children('.hidden-text4').css('height', ''+textMaxHeight);
	      jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
	    } else {
	      jObj.children('.hidden-text4').css('height', ''+textMinHeight);
	      jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
	    }
	  });
	}
	function ReadMore5(_jObj, lineNum) { 
	  var READ_MORE_LABEL = 'read more';
	  var HIDE_LABEL = 'read less';

	  var jObj = _jObj;
	  var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text5').css('line-height'),10)*lineNum) +'px';
	  var textMaxHeight = ''+jObj.children('.hidden-text5').css('height');

	  jObj.children('.hidden-text5').css('height', ''+ textMaxHeight);
	  jObj.children('.hidden-text5').css( 'transition', 'height .5s');
	  jObj.children('.hidden-text5').css('height', ''+ textMinHeight);

	  jObj.append ('<button class="read-more readMoreBtn">'+READ_MORE_LABEL+'</button>');

	  jObj.children('.read-more').click ( function() {
	    if (jObj.children('.hidden-text5').css('height') === textMinHeight) {
	      jObj.children('.hidden-text5').css('height', ''+textMaxHeight);
	      jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
	    } else {
	      jObj.children('.hidden-text5').css('height', ''+textMinHeight);
	      jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
	    }
	  });
	}
  
  
  
  
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);
