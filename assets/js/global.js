(function($) {
  'use strict';
  //PDF Dialog box

  // Activate Tooltips & Popovers
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Dismiss Popovers on next click
    $('.popover-dismiss').popover({
      trigger: 'focus'
    })
	
  });
AOS.init();
  // Bootstrap Fixed Header
  $(function() {
    // Check to see if there is a bakcground class on loading
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-bg-onscroll');
    }

    // Check to add a background class on scrolling
    $(window).on('scroll', function() {
      var navbarOffset = $('#mainNav').offset().top > 100;
      if(navbarOffset) {
        $('#mainNav').addClass('navbar-bg-onscroll');
      }
      else {
        $('#mainNav').removeClass('navbar-bg-onscroll');
        $('#mainNav').addClass('navbar-bg-onscroll--fade');
      }
    });
  });

  /*-------------------------------------------------------------------------------
		Open consultation modal using scroll depth
	-------------------------------------------------------------------------------*/

	let hasOpenedCounsultationModal = false;

	function isVisibleConsultationModal({ event, eventLabel }) {
		const EVENT_NAME = 'ScrollDistance';
		const TARGET_ELEMENT = '#about';
		
		return event === EVENT_NAME && eventLabel === TARGET_ELEMENT && !hasOpenedCounsultationModal;
	}

	function openConsultationModal() {
		$('#consultationModal').modal('show');
	}
	
	jQuery(function () {
		jQuery.scrollDepth({
			elements: ['#top', '#services', '#about', '#rating', '#clients','#portfolio'],
			eventHandler: function(data) {
				if (isVisibleConsultationModal(data)) {
					openConsultationModal();
					hasOpenedCounsultationModal = !hasOpenedCounsultationModal;
				}
			}
		});
	});

	$('.modal .close').click(function() {
		$('#consultationModal').modal('hide')
	});

  /*-------------------------------------------------------------------------------
		Open Testimonial modal using scroll depth
	-------------------------------------------------------------------------------*/

  
	$(window).on('load', function() {
		$('#testimonModal').modal('show');
	});

		if (!!buildingArea) {
			$('#testimonModal .modal-body').html(renderHtml)
		}

		event.preventDefault();

  // Scroll to (Section)
  $(function() {
    $('a[href*=#js-scroll-to-]:not([href=#js-scroll-to-])').on('click', function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 10
          }, 1000);
          return false;
        }
      }
    });
  });
  
          $('.portfolio-item').isotope({
         	itemSelector: '.item',
         	layoutMode: 'fitRows'
         });
         $('.portfolio-menu ul li').click(function(){
         	$('.portfolio-menu ul li').removeClass('active');
         	$(this).addClass('active');
         	
         	var selector = $(this).attr('data-filter');
         	$('.portfolio-item').isotope({
         		filter:selector
         	});
         	return  false;
         });
         $(document).ready(function() {
         var popup_btn = $('.popup-btn');
         popup_btn.magnificPopup({
         type : 'image',
         gallery : {
         	enabled : true
         }
         });
         });
		 
}(jQuery));