$(function () {

	/* my code */
	var reviews = new Swiper('#reviews__slider', {
		loop: true,
		effect: 'coverflow',
		centeredSlides: true,
		slidesPerView: 'auto',
		speed: 500,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	$(".top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	//===============================

	if ($(this).scrollTop() > 800) {
		$("#header").addClass("header-scrolled");
		$("body").addClass("scrolled");
	}
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 800) {
			$("#header").addClass("header-scrolled");
			$("body").addClass("scrolled");
		} else {
			$("#header").removeClass("header-scrolled");
			$("body").removeClass("scrolled");
		}
	});


});

var app = new Vue({
	el: '#app',
	data: {
		c_1: false,
		c_2: false,
		c_3: false,
		c_4: false,
		c_5: false,
		stage: 0
	},
	computed: {
		svgClass() {
			return this.c_1 || this.c_2 || this.c_3 || this.c_4 || this.c_5;
		}
	}
});


