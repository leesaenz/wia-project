$(document).ready(function(){

	//HTML5 Video

	var video = document.getElementById("homeVideo");
	var pause = document.querySelector(".pause");

	function videoOut() {
	  video.classList.add("stop");
	}

	video.addEventListener('ended', function() {
	video.pause();
	videoOut();
	}); 


	pause.addEventListener("click", function() {
	  video.classList.toggle("stop");
	  if (video.paused) {
	    video.play();
	    pause.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	  } else {
	    video.pause();
	    pause.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	  }
	});

	//Navigation on-click

	$('.hamburger').on('click',function(e){
		$('.nav').fadeToggle();
		e.preventDefault();
	});

	//Browser Scroll to Top

	var offset = 300,
	offset_opacity = 1200,
	scroll_duration = 700,
	$top = $('.top-link');

	//Show Back to Top Link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $top.addClass('top-link-is-visible') : $top.removeClass('top-link-is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$top.addClass('fade-out');
		}
	});

	//Scroll to Top on Click of Back to Top Link
	$top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_duration
		);
	});

	//Nav Scroll
	$(function() {
	  $('nav a[href*="#"]:not([href="#"]),.portfolio-button').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	//FancyBox

	$(".fancybox").fancybox({
		'transitionIn': 'elastic',
	    'transitionOut': 'elastic',
	    'speedIn': 1000,
	    'speedOut': 700,
		helpers: {
		    overlay: {
		      locked: false
		    }
  		}
	});

	//HighCharts

	$(function () {
	    $('#chart').highcharts({
	        chart: {
	            type: 'area'
	        },
	        title: {
	            text: 'Area chart with negative values'
	        },
	        xAxis: {
	            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: 'John',
	            data: [5, 3, 4, 7, 2]
	        }, {
	            name: 'Jane',
	            data: [2, -2, -3, 2, 1]
	        }, {
	            name: 'Joe',
	            data: [3, 4, 4, -2, 5]
	        }]
	    });
	});

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
});