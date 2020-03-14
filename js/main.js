AOS.init({
	duration: 800,
	easing: 'slide',
	once: true,
});
// Masonry
// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry(grid, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true,
	gutter: '.gutter-sizer',

});

imagesLoaded(grid).on('progress', function () {
	// layout Masonry after each image loads
	msnry.layout();
});
jQuery(document).ready(function ($) {

	"use strict";


	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();









	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,

				nav: false,
				navText: ['<span class="icon-arrow-left2">', '<span class="icon-arrow-right2 ">'],
				dotsEach: true,
				autoplaySpeed: 1000,

				responsive: {
					600: {
						margin: 0,
						nav: true,
						items: 2
					},
					1000: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1000,
			autoplay: true,


			autoHeight: true,
			nav: false,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
			autoplayTimeout: 7000,
		});


	};
	siteCarousel();




	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 600, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {



		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();



	$('.fancybox').on('click', function () {
		var visibleLinks = $('.fancybox');

		$.fancybox.open(visibleLinks, {}, visibleLinks.index(this));

		return false;
	});

	/* stast counter
	* ---------------------------------------------------- */
	var clStatCount = function () {

		var statSection = $(".event-count"),
			stats = $(".number"),
			statsw = $(".progress-bar");

		statSection.waypoint({

			handler: function (direction) {

				if (direction === "down") {

					stats.each(function () {
						var $this = $(this);

						$({
							Counter: 0
						}).animate({
							Counter: $this.text()
						}, {
							duration: 2000,

							step: function (curValue) {
								$this.text(Math.ceil(curValue));
							}
						});
					});

					statsw.each(function () {
						var $thisw = $(this);

						$({
							Counterw: 0
						}).animate({
							Counterw: $thisw.width()
						}, {
							duration: 2000,

							step: function (curValuew) {
								$thisw.width(Math.ceil(curValuew));
							}
						});
					});

				}

				// trigger once only
				this.destroy();

			},

			offset: "130%"

		});
	};
	clStatCount();

});