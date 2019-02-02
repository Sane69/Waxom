'use strict';

(function($){

	$('.header__link, .scrolling__link').click(function(e) {
		e.preventDefault();

		var target = $(this.hash);

		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000)
	})

	$('.slider').slick({
		dots:true,
		slidesToShow: 1, 
		slidesToScroll: 1,
		speed: 400,
		fade: true,
		cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
		arrows: false
	});

	$('.post__slider').slick({
		slidesToShow: 3,
		dots: false,
		autoplay: true,
        autoplaySpeed: 3000,
		infinite: false,

		responsive: [
		{
			breakpoint: 1050,
			settings: {
				slidesToShow: 1
			}
		},
		]
	});

	var scrolled;
		window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 10){
        $('.header__fixed').css('background', '#997C62')
    }
    if(scrolled < 10){
        $('.header__fixed').css({'background': ''})
        $('.header__fixed').css('color', '');
    }
}

	$().fancybox({
		selector: '.portfolio__img:visible > a'
	});
	var $portfolio__pictures = $('.portfolio__pictures').isotope({
		itemSelector: '.pictures__elem',
		masonry: {
			gutter: 20
		}
	});	

	$('.filter__link--group').on( 'click', 'a', function(e) {
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$portfolio__pictures.isotope({ filter: filterValue });
	});

	$('.waxom__link').click(function(){
		$('.waxom__items').css('display', 'none');
		$('div.mfp').css('display', 'block');
		$('div.waxom__main').css('padding', '0');
		$('div.youtube').css('display', 'block');
		$('.youtube__frame').prop('src', 'https://www.youtube.com/embed/lxtWMOAHoiI?autoplay=0');
		$('.header__fixed').css('position', 'absolute');
	});

	$('.closed').click(function(){
		$('.youtube').hide();
		$('#player').prop('src', '');
		$('.waxom__items').css('display', 'block');
		$('div.mfp').css('display', 'none');
		$('div.waxom__main').css('padding', '110px 0px 82px');
		$('.header__fixed').css('position', 'fixed');
	});


	  $(document).mouseup(function(e) {
    		var container = $('.youtube');
	    $('.waxom__items').css('display', 'block');
	    $('div.waxom__main').css('padding', '110px 0px 82px');
	    $('div.mfp').css('display', 'none');
	    $('#player').prop('src', '');
	    $('.header__fixed').css('position', 'fixed');

    if (container.has(e.target).length === 0){
        container.hide();
    }
 });

	  document.getElementById("form").addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

	  	$('.header__icon--img').click(function(){
			$('.wrapper').css('display', 'none');
			$('.header__form').css('display', 'block');
	});

	  	$('.header__close').click(function(){
	  	  	$('.header__form').css('display', 'none');
	  		$('.wrapper').css('display', 'flex');
	  		$('#form')[0].reset();
	  	});

	  $(document).ready(function(){

	  	var show = true;

		$(window).on('scroll', function(){

			if(!show) return false;

		  	var w_top = $(window).scrollTop();
		  	var e_top = $ ('#counts').offset().top;

	  	console.log(w_top + " " + e_top);

	  	if(w_top > 4200){
		  $(".counter__spincrement").spincrement({
		  	from: 0,
		  	thousandSeparator: "",
		  	duration: 4000
		  });

		  show = false;
	  	}
	  });
	});

	  $(document).ready(function(){
	  		$('#hamburger').click(function(e) {
	  			e.stopPropagation();
	  			$('.menu__mobile').slideToggle();
	  			$('.header__fixed').css('position', 'absolute');
	  		});
	
	  	$(document).click(function(e){
	  		var menu = $('.menu__mobile');
	  		if (menu.has(e.target).length === 0) {
	  			menu.hide();
	  		}
	  	});
	  });


})(jQuery);