(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// window.jQuery = require('jquery');
// var $ = require('jquery');
// var jQuery = require('jquery');

(function($) { 
  $.fn.animated = function(inEffect, outEffect) { 
   var jQueryObject = $(this); 
 
   jQueryObject.css("opacity", "0").addClass("animated"); 
 
 
   jQueryObject.waypoint(function(dir) { 
    if (dir === "down") { 
     jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1"); 
    } else { 
     jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1"); 
    }; 
   }, { 
    offset: "80%" 
   }); 
 
   jQueryObject.waypoint(function(dir) { 
    if (dir === "down") { 
     jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1"); 
    } else { 
     jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1"); 
    }; 
   }, { 
    offset: -$(window).height() 
   }); 
  }; 
 })(jQuery);

 //animate
$(function(){


  // <-------------------------- topline ---------------------->
  $(".topline__row-animate").animated("fadeInDown", "fadeOutUp");
  $(".topline__row-2").animated("fadeInDown", "fadeOutUp");
  // <-------------------------- /topline ---------------------->

  // <-------------------------- header ---------------------->
  $(".header__wrapper").animated("fadeInLeft", "fadeOutLeft");
  $(".header__right").animated("fadeInRight", "fadeOutRight");
  // <-------------------------- /header ---------------------->


 // <-------------------------- what ---------------------->
  $(".what__container").animated("fadeInUp", "fadeOutDown");
  $(".what__wrapper-item").each(function(){
    $(this).animated("flipInY", "flipOutY");
  })

 // <-------------------------- /what ---------------------->

  // <-------------------------- offer ---------------------->
  $(".offer__container").animated("fadeInUp", "fadeOutDown");
  $(".offers").each(function(){
    $(this).animated("flipInY", "flipOutY");
  })


 // <-------------------------- /offer ---------------------->

 // <-------------------------- akcija ---------------------->
  $(".akcija__row").animated("fadeInUp", "fadeOutDown");
  $(".akcija__icon").each(function(){
    $(this).animated("flipInY", "flipOutY");
  })


 // <-------------------------- /akcija ---------------------->
 $(".dohod__container").animated("fadeInUp", "fadeOutDown");


   // <-------------------------- work ---------------------->
   $(".work__container").animated("fadeInUp", "fadeOutDown");
  
    $(".work__card").each(function(){
      $(this).animated("flipInY", "flipOutY");
    })

  // <-------------------------- /work ---------------------->

   // <-------------------------- /otziv ---------------------->
   $(".otziv__container").animated("fadeInUp", "fadeOutDown");

   $(".card").animated("fadeInLeft", "fadeOutLeft");
   $(".otziv__block-caption").animated("fadeInRight", "fadeOutRight");

    // <-------------------------- /otziv ---------------------->

    // <-------------------------- vakansija ---------------------->
    $(".vakansija__container").animated("fadeInUp", "fadeOutDown");
  
    $(".vakansija__block .item").each(function(){
      $(this).animated("fadeInRight", "fadeOutRight");
    })
    // <-------------------------- /vakansija ---------------------->
    
  // <-------------------------- ecpv ---------------------->
  $(".section-ecpv__container").animated("fadeInUp", "fadeOutDown");
  
  $(".section-ecpv-bg__quest").each(function(){
    $(this).animated("fadeInUp", "fadeOutDown");
  })
  $(".section-ecpv .container").each(function(){
    $(this).animated("fadeInRight", "fadeOutRight");
  })
  // <-------------------------- /ecpv ---------------------->

  // <-------------------------- blog ---------------------->
  $(".blog-bg__caption").animated("fadeInUp", "fadeOutDown");
  
  $(".blogs__items").each(function(){
    $(this).animated("fadeInRight", "fadeOutRight");
  })
  // <-------------------------- /blog ---------------------->

  // <-------------------------- about ---------------------->
  $(".about__container").animated("fadeInUp", "fadeOutDown");

  $(".about main p").each(function(){
    $(this).animated("fadeInRight", "fadeOutRight");
  })

  $(".registration__block .item").each(function(){
    $(this).animated("flipInX", "fadeOutRight");
  })
  
  // <-------------------------- /about ---------------------->
  
  
// <-------------------------- section-135__container ---------------------->
$(".section-135__container").animated("fadeInUp", "fadeOutDown");
$(".block3 .block3-requied").animated("fadeInUp", "fadeOutDown");

$(".blockItems .item").each(function(){
  $(this).animated("fadeInUp", "fadeOutDown");
})

$(".block2__item ").each(function(){
  $(this).animated("fadeInUp", "fadeOutDown");
})

$(".block3-requied-list__item").each(function(){
  $(this).animated("fadeInUp", "fadeOutDown");
})
// <-------------------------- /section-135__container ---------------------->

})



$(function(){
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
})




//burger mobile
$(function(){
	$('.header-burger').click(function(){
		$('.header-menu').toggleClass('header-menu-active');

		$('.header-menu-active a').click(function(){
			$('.header-menu').removeClass('header-menu-active');
		})
	})
})


$(function(){
  if(document.querySelector(".akcija__img") != null) {
    //paralax
  function paralax(e) {
		let x = e.clientX/50;
		let y = e.clientY/50;
	
		 var layer = document.querySelector(".akcija__img");
		 layer.style.transform = "translate("+x+"px, "+y+"px)";
  }

	document.addEventListener('mousemove', paralax);
  }
})

$(function(){
  if(document.querySelector(".block4-wrapper__item-img img") != null) {
    //paralax
  function paralax(e) {
		let x = e.clientX/50;
		let y = e.clientY/50;
	
		 var layer = document.querySelector(".block4-wrapper__item-img img");
		 layer.style.transform = "translate("+x+"px, "+y+"px)";
  }

	document.addEventListener('mousemove', paralax);
  }
})
  
	
	//send mail
	$( document ).ready(function() {
		$(".footer-form").submit(function(e){
				e.preventDefault();
				sendAjaxForm('.footer-form', 'http://localhost:3000/mail.php');

				function sendAjaxForm(ajax_form, url) {
						$.ajax({
								url:     url, //url страницы (send.php)
								type:     "POST", //метод отправки
								dataType: "html",
								data: $(ajax_form).serialize(),  // Сеарилизуем объект
								beforeSend: function(data) { // событие до отправки
									$('.footer_btn').attr('disabled', 'disabled');						
								},
								success: function(response) { //Данные отправлены успешно
										console.log(response);
										result = $.parseJSON(response);
										console.log(result);
										$(".footer-form").trigger("reset");

										$('.modal-head-name').html("Спасибо!");
										$('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
										$(".modal-overlay1").fadeIn();
										$(".modal1").fadeIn();
										$(".modal1").css({"transform" : "translateY(0%)"});
										$("body").css({"overflow":"hidden"});
										$('.workim__btn').removeAttr('disabled');
								}
						});
				}
		});
	});

	$(".modal-overlay1, .close-modal1").on("click", function(){
		$submit.removeAttribute("disabled")
		$(".modal-overlay1").fadeOut();
		$(".modal1").fadeOut();
		$(".modal1").css({"transform" : "translateY(300%)"});
		$("body").css({"overflow":"visible"});
})


//gradient button hover
$(function(){
  let resizeReset = function() {
    w = canvasBody.width = window.innerWidth;
    h = canvasBody.height = window.innerHeight;
  }
  
  const opts = { 
    particleColor: "rgb(255,255,255)",
    lineColor: "rgb(255,255,255)",
    particleAmount: 30,
    defaultSpeed: 2,
    variantSpeed: 1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 400,
  };
  
  window.addEventListener("resize", function(){
    deBouncer();
  });
  
  let deBouncer = function() {
      clearTimeout(tid);
      tid = setTimeout(function() {
          resizeReset();
      }, delay);
  };
  
  let checkDistance = function(x1, y1, x2, y2){ 
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };
  
  let linkPoints = function(point1, hubs){ 
    for (let i = 0; i < hubs.length; i++) {
      let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
      let opacity = 1 - distance / opts.linkRadius;
      if (opacity > 0) { 
        drawArea.lineWidth = 0.5;
        drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
        drawArea.beginPath();
        drawArea.moveTo(point1.x, point1.y);
        drawArea.lineTo(hubs[i].x, hubs[i].y);
        drawArea.closePath();
        drawArea.stroke();
      }
    }
  }
  
  Particle = function(xPos, yPos){ 
    this.x = Math.random() * w; 
    this.y = Math.random() * h;
    this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
    this.directionAngle = Math.floor(Math.random() * 360); 
    this.color = opts.particleColor;
    this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
    this.vector = {
      x: Math.cos(this.directionAngle) * this.speed,
      y: Math.sin(this.directionAngle) * this.speed
    };
    this.update = function(){ 
      this.border(); 
      this.x += this.vector.x; 
      this.y += this.vector.y; 
    };
    this.border = function(){ 
      if (this.x >= w || this.x <= 0) { 
        this.vector.x *= -1;
      }
      if (this.y >= h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > w) this.x = w;
      if (this.y > h) this.y = h;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;	
    };
    this.draw = function(){ 
      drawArea.beginPath();
      drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      drawArea.closePath();
      drawArea.fillStyle = this.color;
      drawArea.fill();
    };
  };
  
  function setup(){ 
    particles = [];
    resizeReset();
    for (let i = 0; i < opts.particleAmount; i++){
      particles.push( new Particle() );
    }
    window.requestAnimationFrame(loop);
  }
  
  function loop(){ 
    window.requestAnimationFrame(loop);
    drawArea.clearRect(0,0,w,h);
    for (let i = 0; i < particles.length; i++){
      particles[i].update();
      particles[i].draw();
    }
    for (let i = 0; i < particles.length; i++){
      linkPoints(particles[i], particles);
    }
  }
  
  const canvasBody = document.getElementById("canvas"),
  drawArea = canvasBody.getContext("2d");
  let delay = 200, tid,
  rgb = opts.lineColor.match(/\d+/g);
  resizeReset();
  setup();
})

// btn click in form
$(function(){
  $('.header__formbtn').on('click', function() {
    $('input[type="submit"]').click();
  }) 
})

//image photo show
$(function(){
	$('.card__border img').each((index,el) => {
		  $(el).click((e) => {
       //e.target.classList.add('active-photo');
        if (e.target.classList.contains('active-photo')) {
          console.log('yes');
          
        } else {
         
          //console.log('no');
         $('.card__border img').each(function(ind,el){
           el.classList.remove('active-photo');
           //console.log(el)
         })
         e.target.classList.add('active-photo');

         $('.otziv__block-photo img').attr('src',e.target.src);
         let name = e.target.nextElementSibling.children[0].innerHTML;
         let disc = e.target.nextElementSibling.children[1].innerHTML;
  
         $('.otziv__block-title').html(name);
                  
          function doHomework(callback) {
            $('.otziv__block-disc').hide(300);
            $('.otziv__block-title').hide(300);
            callback();
          }
  
          doHomework( function() {
            let maxLength = 150;
            if (disc.length > maxLength) {
              let str = disc.slice(0,maxLength);
              str+="...";
              $('.otziv__block-disc').show(500);
              $('.otziv__block-disc').html(str);
              $('.otziv__block-title').show(500);
            } 
            else {
              $('.otziv__block-disc').show(500);
              $('.otziv__block-disc').html(disc);
              $('.otziv__block-title').show(500);
            }
          });

        }
		 })
  })
 });

 $(function(){
  let maxLength = 150;
  let text =  document.querySelector('.otziv__block-disc').innerHTML;
  if (text.length > maxLength) {
    let str = text.slice(0,maxLength);
    str+="...";
    $('.otziv__block-disc').html(str);
  }
 })

 //скрыть часть новости блога
 $(function(){
   let textBlog = document.querySelectorAll('.blogs__items .disc');
   //console.log(textBlog)
   textBlog.forEach((el) => {
    let maxLength = 250;
    
    let text = el.innerHTML;
    
     if (text.length > maxLength) {
      let str = el.innerHTML.slice(0,maxLength);
      str+="...";
      // console.log($(el));
      //console.log(this)
      $(el).html(str);
     }
   })
 })



 //скрыть показать описание
 $(function(){
   $('.block5__btn').click(function(){
     if ($('.block5__wrap').css('max-height') == '140px') {
       $('.block5__btn-text').html('Скрыть');
       $('.block5__btn-arr').css('transform','rotate(180deg)');
       $('.block5__wrap').css('max-height','1000px');
    
     } else {
      $('.block5__wrap').css('max-height','140px');
      $('.block5__btn-arr').css('transform','rotate(0deg)');
      $('.block5__btn-text').html('Подробнее');

      let $page = $('html, body');
      let target = document.querySelector('.block5');
      $page.animate({scrollTop: $(target).offset().top}, 1000);
           
     }
   })
 })





 //плавный скролл к тегу
$(function(){
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
})

//carusel friend
$(function() {

  var owl = $(".owl-carousel-friend");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: false,
    dots:true,
    responsive:{
      0:{
          items:2,
          nav:false
      },
      768:{
          items:3,
          nav:false
      },
      1024:{
          items:4,
          nav:false,
          loop: false
      }
  }
  });
});

//arr in friend block section
$('.slick-prev').click(function(){
  $('.friend__items').slick('slickPrev');
})

$('.slick-next').click(function(){
  $('.friend__items').slick('slickNext');
})


//carusel blog
$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel-blog");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: false,
    dots:true,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      690:{
          items:2,
          nav:false
      },
      1201:{
          items:3,
          nav:false,
          loop: false
      }
  }
    
  });
});



//btn burger

$(function(){

  $('.topline__burger-img').click(Modal)

  $('.overlay').click(Modal); 
 
  $('.modal__close span').click(Modal);


  function Modal() {
    let modal = document.querySelector('.modal');
    if ( $('.topline__burger-img').hasClass('topline__burger-img-active')) {
     $('.topline__burger-img').removeClass('topline__burger-img-active') 
     $('.modal').removeClass('modal-active');
     $('body').css('overflow','visible');
     $('.overlay').hide();
    }  else {
     $('.topline__burger-img').addClass('topline__burger-img-active');
     $('.modal').addClass('modal-active');
     $('body').css('overflow','hidden');
     $('.overlay').show();
    } 
  }



})


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbihmdW5jdGlvbigkKSB7IFxyXG4gICQuZm4uYW5pbWF0ZWQgPSBmdW5jdGlvbihpbkVmZmVjdCwgb3V0RWZmZWN0KSB7IFxyXG4gICB2YXIgalF1ZXJ5T2JqZWN0ID0gJCh0aGlzKTsgXHJcbiBcclxuICAgalF1ZXJ5T2JqZWN0LmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpLmFkZENsYXNzKFwiYW5pbWF0ZWRcIik7IFxyXG4gXHJcbiBcclxuICAgalF1ZXJ5T2JqZWN0LndheXBvaW50KGZ1bmN0aW9uKGRpcikgeyBcclxuICAgIGlmIChkaXIgPT09IFwiZG93blwiKSB7IFxyXG4gICAgIGpRdWVyeU9iamVjdC5yZW1vdmVDbGFzcyhvdXRFZmZlY3QpLmFkZENsYXNzKGluRWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTsgXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICBqUXVlcnlPYmplY3QucmVtb3ZlQ2xhc3MoaW5FZmZlY3QpLmFkZENsYXNzKG91dEVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7IFxyXG4gICAgfTsgXHJcbiAgIH0sIHsgXHJcbiAgICBvZmZzZXQ6IFwiODAlXCIgXHJcbiAgIH0pOyBcclxuIFxyXG4gICBqUXVlcnlPYmplY3Qud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7IFxyXG4gICAgaWYgKGRpciA9PT0gXCJkb3duXCIpIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKGluRWZmZWN0KS5hZGRDbGFzcyhvdXRFZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgIGpRdWVyeU9iamVjdC5yZW1vdmVDbGFzcyhvdXRFZmZlY3QpLmFkZENsYXNzKGluRWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTsgXHJcbiAgICB9OyBcclxuICAgfSwgeyBcclxuICAgIG9mZnNldDogLSQod2luZG93KS5oZWlnaHQoKSBcclxuICAgfSk7IFxyXG4gIH07IFxyXG4gfSkoalF1ZXJ5KTtcclxuXHJcbiAvL2FuaW1hdGVcclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLnRvcGxpbmVfX3Jvdy1hbmltYXRlXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAkKFwiLnRvcGxpbmVfX3Jvdy0yXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3RvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuaGVhZGVyX193cmFwcGVyXCIpLmFuaW1hdGVkKFwiZmFkZUluTGVmdFwiLCBcImZhZGVPdXRMZWZ0XCIpO1xyXG4gICQoXCIuaGVhZGVyX19yaWdodFwiKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3aGF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi53aGF0X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gICQoXCIud2hhdF9fd3JhcHBlci1pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmbGlwSW5ZXCIsIFwiZmxpcE91dFlcIik7XHJcbiAgfSlcclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3doYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG9mZmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5vZmZlcl9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICAkKFwiLm9mZmVyc1wiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWVwiLCBcImZsaXBPdXRZXCIpO1xyXG4gIH0pXHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvb2ZmZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWtjaWphIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5ha2NpamFfX3Jvd1wiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgJChcIi5ha2NpamFfX2ljb25cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZsaXBJbllcIiwgXCJmbGlwT3V0WVwiKTtcclxuICB9KVxyXG5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2FrY2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gJChcIi5kb2hvZF9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcblxyXG4gICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd29yayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAkKFwiLndvcmtfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgICAkKFwiLndvcmtfX2NhcmRcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWVwiLCBcImZsaXBPdXRZXCIpO1xyXG4gICAgfSlcclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC93b3JrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL290eml2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgICQoXCIub3R6aXZfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcblxyXG4gICAkKFwiLmNhcmRcIikuYW5pbWF0ZWQoXCJmYWRlSW5MZWZ0XCIsIFwiZmFkZU91dExlZnRcIik7XHJcbiAgICQoXCIub3R6aXZfX2Jsb2NrLWNhcHRpb25cIikuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuXHJcbiAgICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL290eml2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZha2Fuc2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAgJChcIi52YWthbnNpamFfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgICAkKFwiLnZha2Fuc2lqYV9fYmxvY2sgLml0ZW1cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgICB9KVxyXG4gICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC92YWthbnNpamEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAgIFxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBlY3B2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5zZWN0aW9uLWVjcHZfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgJChcIi5zZWN0aW9uLWVjcHYtYmdfX3F1ZXN0XCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIH0pXHJcbiAgJChcIi5zZWN0aW9uLWVjcHYgLmNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgfSlcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2VjcHYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJsb2cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLmJsb2ctYmdfX2NhcHRpb25cIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIFxyXG4gICQoXCIuYmxvZ3NfX2l0ZW1zXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICB9KVxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvYmxvZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWJvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLmFib3V0X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG5cclxuICAkKFwiLmFib3V0IG1haW4gcFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcIi5yZWdpc3RyYXRpb25fX2Jsb2NrIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmbGlwSW5YXCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIH0pXHJcbiAgXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9hYm91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gIFxyXG4gIFxyXG4vLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2VjdGlvbi0xMzVfX2NvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4kKFwiLnNlY3Rpb24tMTM1X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4kKFwiLmJsb2NrMyAuYmxvY2szLXJlcXVpZWRcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG5cclxuJChcIi5ibG9ja0l0ZW1zIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxufSlcclxuXHJcbiQoXCIuYmxvY2syX19pdGVtIFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbn0pXHJcblxyXG4kKFwiLmJsb2NrMy1yZXF1aWVkLWxpc3RfX2l0ZW1cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG59KVxyXG4vLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3NlY3Rpb24tMTM1X19jb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICB2YXIgJHBhZ2UgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgJCgnYVtocmVmKj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxyXG4gICAgICB9LCA0MDApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4vL2J1cmdlciBtb2JpbGVcclxuJChmdW5jdGlvbigpe1xyXG5cdCQoJy5oZWFkZXItYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXItbWVudScpLnRvZ2dsZUNsYXNzKCdoZWFkZXItbWVudS1hY3RpdmUnKTtcclxuXHJcblx0XHQkKCcuaGVhZGVyLW1lbnUtYWN0aXZlIGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcuaGVhZGVyLW1lbnUnKS5yZW1vdmVDbGFzcygnaGVhZGVyLW1lbnUtYWN0aXZlJyk7XHJcblx0XHR9KVxyXG5cdH0pXHJcbn0pXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWtjaWphX19pbWdcIikgIT0gbnVsbCkge1xyXG4gICAgLy9wYXJhbGF4XHJcbiAgZnVuY3Rpb24gcGFyYWxheChlKSB7XHJcblx0XHRsZXQgeCA9IGUuY2xpZW50WC81MDtcclxuXHRcdGxldCB5ID0gZS5jbGllbnRZLzUwO1xyXG5cdFxyXG5cdFx0IHZhciBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWtjaWphX19pbWdcIik7XHJcblx0XHQgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIreCtcInB4LCBcIit5K1wicHgpXCI7XHJcbiAgfVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwYXJhbGF4KTtcclxuICB9XHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9jazQtd3JhcHBlcl9faXRlbS1pbWcgaW1nXCIpICE9IG51bGwpIHtcclxuICAgIC8vcGFyYWxheFxyXG4gIGZ1bmN0aW9uIHBhcmFsYXgoZSkge1xyXG5cdFx0bGV0IHggPSBlLmNsaWVudFgvNTA7XHJcblx0XHRsZXQgeSA9IGUuY2xpZW50WS81MDtcclxuXHRcclxuXHRcdCB2YXIgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrNC13cmFwcGVyX19pdGVtLWltZyBpbWdcIik7XHJcblx0XHQgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIreCtcInB4LCBcIit5K1wicHgpXCI7XHJcbiAgfVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwYXJhbGF4KTtcclxuICB9XHJcbn0pXHJcbiAgXHJcblx0XHJcblx0Ly9zZW5kIG1haWxcclxuXHQkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5mb290ZXItZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHNlbmRBamF4Rm9ybSgnLmZvb3Rlci1mb3JtJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYWlsLnBocCcpO1xyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiBzZW5kQWpheEZvcm0oYWpheF9mb3JtLCB1cmwpIHtcclxuXHRcdFx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogICAgIHVybCwgLy91cmwg0YHRgtGA0LDQvdC40YbRiyAoc2VuZC5waHApXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAgICAgXCJQT1NUXCIsIC8v0LzQtdGC0L7QtCDQvtGC0L/RgNCw0LLQutC4XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhOiAkKGFqYXhfZm9ybSkuc2VyaWFsaXplKCksICAvLyDQodC10LDRgNC40LvQuNC30YPQtdC8INC+0LHRitC10LrRglxyXG5cdFx0XHRcdFx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oZGF0YSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQtNC+INC+0YLQv9GA0LDQstC60LhcclxuXHRcdFx0XHRcdFx0XHRcdFx0JCgnLmZvb3Rlcl9idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIuZm9vdGVyLWZvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKCcubW9kYWwtaGVhZC1uYW1lJykuaHRtbChcItCh0L/QsNGB0LjQsdC+IVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKCcubW9kYWwtaGVhZC1wcmljZScpLmh0bWwoXCLQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLlwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgwJSlcIn0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKCcud29ya2ltX19idG4nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0JChcIi5tb2RhbC1vdmVybGF5MSwgLmNsb3NlLW1vZGFsMVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcblx0XHQkc3VibWl0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpXHJcblx0XHQkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVPdXQoKTtcclxuXHRcdCQoXCIubW9kYWwxXCIpLmZhZGVPdXQoKTtcclxuXHRcdCQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgzMDAlKVwifSk7XHJcblx0XHQkKFwiYm9keVwiKS5jc3Moe1wib3ZlcmZsb3dcIjpcInZpc2libGVcIn0pO1xyXG59KVxyXG5cclxuXHJcbi8vZ3JhZGllbnQgYnV0dG9uIGhvdmVyXHJcbiQoZnVuY3Rpb24oKXtcclxuICBsZXQgcmVzaXplUmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHcgPSBjYW52YXNCb2R5LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBoID0gY2FudmFzQm9keS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IG9wdHMgPSB7IFxyXG4gICAgcGFydGljbGVDb2xvcjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXHJcbiAgICBsaW5lQ29sb3I6IFwicmdiKDI1NSwyNTUsMjU1KVwiLFxyXG4gICAgcGFydGljbGVBbW91bnQ6IDMwLFxyXG4gICAgZGVmYXVsdFNwZWVkOiAyLFxyXG4gICAgdmFyaWFudFNwZWVkOiAxLFxyXG4gICAgZGVmYXVsdFJhZGl1czogMixcclxuICAgIHZhcmlhbnRSYWRpdXM6IDIsXHJcbiAgICBsaW5rUmFkaXVzOiA0MDAsXHJcbiAgfTtcclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgZGVCb3VuY2VyKCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgbGV0IGRlQm91bmNlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGlkKTtcclxuICAgICAgdGlkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJlc2l6ZVJlc2V0KCk7XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBjaGVja0Rpc3RhbmNlID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpeyBcclxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeDIgLSB4MSwgMikgKyBNYXRoLnBvdyh5MiAtIHkxLCAyKSk7XHJcbiAgfTtcclxuICBcclxuICBsZXQgbGlua1BvaW50cyA9IGZ1bmN0aW9uKHBvaW50MSwgaHVicyl7IFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBodWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IGNoZWNrRGlzdGFuY2UocG9pbnQxLngsIHBvaW50MS55LCBodWJzW2ldLngsIGh1YnNbaV0ueSk7XHJcbiAgICAgIGxldCBvcGFjaXR5ID0gMSAtIGRpc3RhbmNlIC8gb3B0cy5saW5rUmFkaXVzO1xyXG4gICAgICBpZiAob3BhY2l0eSA+IDApIHsgXHJcbiAgICAgICAgZHJhd0FyZWEubGluZVdpZHRoID0gMC41O1xyXG4gICAgICAgIGRyYXdBcmVhLnN0cm9rZVN0eWxlID0gYHJnYmEoJHtyZ2JbMF19LCAke3JnYlsxXX0sICR7cmdiWzJdfSwgJHtvcGFjaXR5fSlgO1xyXG4gICAgICAgIGRyYXdBcmVhLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGRyYXdBcmVhLm1vdmVUbyhwb2ludDEueCwgcG9pbnQxLnkpO1xyXG4gICAgICAgIGRyYXdBcmVhLmxpbmVUbyhodWJzW2ldLngsIGh1YnNbaV0ueSk7XHJcbiAgICAgICAgZHJhd0FyZWEuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgZHJhd0FyZWEuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgUGFydGljbGUgPSBmdW5jdGlvbih4UG9zLCB5UG9zKXsgXHJcbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdzsgXHJcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogaDtcclxuICAgIHRoaXMuc3BlZWQgPSBvcHRzLmRlZmF1bHRTcGVlZCArIE1hdGgucmFuZG9tKCkgKiBvcHRzLnZhcmlhbnRTcGVlZDsgXHJcbiAgICB0aGlzLmRpcmVjdGlvbkFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTsgXHJcbiAgICB0aGlzLmNvbG9yID0gb3B0cy5wYXJ0aWNsZUNvbG9yO1xyXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRzLmRlZmF1bHRSYWRpdXMgKyBNYXRoLnJhbmRvbSgpICogb3B0cy4gdmFyaWFudFJhZGl1czsgXHJcbiAgICB0aGlzLnZlY3RvciA9IHtcclxuICAgICAgeDogTWF0aC5jb3ModGhpcy5kaXJlY3Rpb25BbmdsZSkgKiB0aGlzLnNwZWVkLFxyXG4gICAgICB5OiBNYXRoLnNpbih0aGlzLmRpcmVjdGlvbkFuZ2xlKSAqIHRoaXMuc3BlZWRcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICB0aGlzLmJvcmRlcigpOyBcclxuICAgICAgdGhpcy54ICs9IHRoaXMudmVjdG9yLng7IFxyXG4gICAgICB0aGlzLnkgKz0gdGhpcy52ZWN0b3IueTsgXHJcbiAgICB9O1xyXG4gICAgdGhpcy5ib3JkZXIgPSBmdW5jdGlvbigpeyBcclxuICAgICAgaWYgKHRoaXMueCA+PSB3IHx8IHRoaXMueCA8PSAwKSB7IFxyXG4gICAgICAgIHRoaXMudmVjdG9yLnggKj0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMueSA+PSBoIHx8IHRoaXMueSA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy52ZWN0b3IueSAqPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy54ID4gdykgdGhpcy54ID0gdztcclxuICAgICAgaWYgKHRoaXMueSA+IGgpIHRoaXMueSA9IGg7XHJcbiAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSAwO1xyXG4gICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gMDtcdFxyXG4gICAgfTtcclxuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICBkcmF3QXJlYS5iZWdpblBhdGgoKTtcclxuICAgICAgZHJhd0FyZWEuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSoyKTtcclxuICAgICAgZHJhd0FyZWEuY2xvc2VQYXRoKCk7XHJcbiAgICAgIGRyYXdBcmVhLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgIGRyYXdBcmVhLmZpbGwoKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiBzZXR1cCgpeyBcclxuICAgIHBhcnRpY2xlcyA9IFtdO1xyXG4gICAgcmVzaXplUmVzZXQoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5wYXJ0aWNsZUFtb3VudDsgaSsrKXtcclxuICAgICAgcGFydGljbGVzLnB1c2goIG5ldyBQYXJ0aWNsZSgpICk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBsb29wKCl7IFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIGRyYXdBcmVhLmNsZWFyUmVjdCgwLDAsdyxoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgcGFydGljbGVzW2ldLnVwZGF0ZSgpO1xyXG4gICAgICBwYXJ0aWNsZXNbaV0uZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsaW5rUG9pbnRzKHBhcnRpY2xlc1tpXSwgcGFydGljbGVzKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY2FudmFzQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLFxyXG4gIGRyYXdBcmVhID0gY2FudmFzQm9keS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgbGV0IGRlbGF5ID0gMjAwLCB0aWQsXHJcbiAgcmdiID0gb3B0cy5saW5lQ29sb3IubWF0Y2goL1xcZCsvZyk7XHJcbiAgcmVzaXplUmVzZXQoKTtcclxuICBzZXR1cCgpO1xyXG59KVxyXG5cclxuLy8gYnRuIGNsaWNrIGluIGZvcm1cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5oZWFkZXJfX2Zvcm1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5jbGljaygpO1xyXG4gIH0pIFxyXG59KVxyXG5cclxuLy9pbWFnZSBwaG90byBzaG93XHJcbiQoZnVuY3Rpb24oKXtcclxuXHQkKCcuY2FyZF9fYm9yZGVyIGltZycpLmVhY2goKGluZGV4LGVsKSA9PiB7XHJcblx0XHQgICQoZWwpLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAvL2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1waG90bycpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1waG90bycpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ25vJyk7XHJcbiAgICAgICAgICQoJy5jYXJkX19ib3JkZXIgaW1nJykuZWFjaChmdW5jdGlvbihpbmQsZWwpe1xyXG4gICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1waG90bycpO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2coZWwpXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1waG90bycpO1xyXG5cclxuICAgICAgICAgJCgnLm90eml2X19ibG9jay1waG90byBpbWcnKS5hdHRyKCdzcmMnLGUudGFyZ2V0LnNyYyk7XHJcbiAgICAgICAgIGxldCBuYW1lID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzBdLmlubmVySFRNTDtcclxuICAgICAgICAgbGV0IGRpc2MgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMV0uaW5uZXJIVE1MO1xyXG4gIFxyXG4gICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBmdW5jdGlvbiBkb0hvbWV3b3JrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLmhpZGUoMzAwKTtcclxuICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLmhpZGUoMzAwKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGRvSG9tZXdvcmsoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgbWF4TGVuZ3RoID0gMTUwO1xyXG4gICAgICAgICAgICBpZiAoZGlzYy5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgICBsZXQgc3RyID0gZGlzYy5zbGljZSgwLG1heExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgc3RyKz1cIi4uLlwiO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5odG1sKHN0cik7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuc2hvdyg1MDApO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLmh0bWwoZGlzYyk7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHRcdCB9KVxyXG4gIH0pXHJcbiB9KTtcclxuXHJcbiAkKGZ1bmN0aW9uKCl7XHJcbiAgbGV0IG1heExlbmd0aCA9IDE1MDtcclxuICBsZXQgdGV4dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5pbm5lckhUTUw7XHJcbiAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICBsZXQgc3RyID0gdGV4dC5zbGljZSgwLG1heExlbmd0aCk7XHJcbiAgICBzdHIrPVwiLi4uXCI7XHJcbiAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5odG1sKHN0cik7XHJcbiAgfVxyXG4gfSlcclxuXHJcbiAvL9GB0LrRgNGL0YLRjCDRh9Cw0YHRgtGMINC90L7QstC+0YHRgtC4INCx0LvQvtCz0LBcclxuICQoZnVuY3Rpb24oKXtcclxuICAgbGV0IHRleHRCbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2dzX19pdGVtcyAuZGlzYycpO1xyXG4gICAvL2NvbnNvbGUubG9nKHRleHRCbG9nKVxyXG4gICB0ZXh0QmxvZy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgbGV0IG1heExlbmd0aCA9IDI1MDtcclxuICAgIFxyXG4gICAgbGV0IHRleHQgPSBlbC5pbm5lckhUTUw7XHJcbiAgICBcclxuICAgICBpZiAodGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgbGV0IHN0ciA9IGVsLmlubmVySFRNTC5zbGljZSgwLG1heExlbmd0aCk7XHJcbiAgICAgIHN0cis9XCIuLi5cIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coJChlbCkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICQoZWwpLmh0bWwoc3RyKTtcclxuICAgICB9XHJcbiAgIH0pXHJcbiB9KVxyXG5cclxuXHJcblxyXG4gLy/RgdC60YDRi9GC0Ywg0L/QvtC60LDQt9Cw0YLRjCDQvtC/0LjRgdCw0L3QuNC1XHJcbiAkKGZ1bmN0aW9uKCl7XHJcbiAgICQoJy5ibG9jazVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgaWYgKCQoJy5ibG9jazVfX3dyYXAnKS5jc3MoJ21heC1oZWlnaHQnKSA9PSAnMTQwcHgnKSB7XHJcbiAgICAgICAkKCcuYmxvY2s1X19idG4tdGV4dCcpLmh0bWwoJ9Ch0LrRgNGL0YLRjCcpO1xyXG4gICAgICAgJCgnLmJsb2NrNV9fYnRuLWFycicpLmNzcygndHJhbnNmb3JtJywncm90YXRlKDE4MGRlZyknKTtcclxuICAgICAgICQoJy5ibG9jazVfX3dyYXAnKS5jc3MoJ21heC1oZWlnaHQnLCcxMDAwcHgnKTtcclxuICAgIFxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5ibG9jazVfX3dyYXAnKS5jc3MoJ21heC1oZWlnaHQnLCcxNDBweCcpO1xyXG4gICAgICAkKCcuYmxvY2s1X19idG4tYXJyJykuY3NzKCd0cmFuc2Zvcm0nLCdyb3RhdGUoMGRlZyknKTtcclxuICAgICAgJCgnLmJsb2NrNV9fYnRuLXRleHQnKS5odG1sKCfQn9C+0LTRgNC+0LHQvdC10LUnKTtcclxuXHJcbiAgICAgIGxldCAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jazUnKTtcclxuICAgICAgJHBhZ2UuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgfVxyXG4gICB9KVxyXG4gfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4gLy/Qv9C70LDQstC90YvQuSDRgdC60YDQvtC70Lsg0Log0YLQtdCz0YNcclxuJChmdW5jdGlvbigpe1xyXG4gIHZhciAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICAkKCdhW2hyZWYqPVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkcGFnZS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxufSlcclxuXHJcbi8vY2FydXNlbCBmcmllbmRcclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIG93bCA9ICQoXCIub3dsLWNhcm91c2VsLWZyaWVuZFwiKTtcclxuICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBtYXJnaW46IDEwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOnRydWUsXHJcbiAgICByZXNwb25zaXZlOntcclxuICAgICAgMDp7XHJcbiAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODp7XHJcbiAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMjQ6e1xyXG4gICAgICAgICAgaXRlbXM6NCxcclxuICAgICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICAgIH1cclxuICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy9hcnIgaW4gZnJpZW5kIGJsb2NrIHNlY3Rpb25cclxuJCgnLnNsaWNrLXByZXYnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICQoJy5mcmllbmRfX2l0ZW1zJykuc2xpY2soJ3NsaWNrUHJldicpO1xyXG59KVxyXG5cclxuJCgnLnNsaWNrLW5leHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICQoJy5mcmllbmRfX2l0ZW1zJykuc2xpY2soJ3NsaWNrTmV4dCcpO1xyXG59KVxyXG5cclxuXHJcbi8vY2FydXNlbCBibG9nXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgLy8gT3dsIENhcm91c2VsXHJcbiAgdmFyIG93bCA9ICQoXCIub3dsLWNhcm91c2VsLWJsb2dcIik7XHJcbiAgb3dsLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czp0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgIDA6e1xyXG4gICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICA2OTA6e1xyXG4gICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICAxMjAxOntcclxuICAgICAgICAgIGl0ZW1zOjMsXHJcbiAgICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL2J0biBidXJnZXJcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5jbGljayhNb2RhbClcclxuXHJcbiAgJCgnLm92ZXJsYXknKS5jbGljayhNb2RhbCk7IFxyXG4gXHJcbiAgJCgnLm1vZGFsX19jbG9zZSBzcGFuJykuY2xpY2soTW9kYWwpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gTW9kYWwoKSB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIGlmICggJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5oYXNDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKSkge1xyXG4gICAgICQoJy50b3BsaW5lX19idXJnZXItaW1nJykucmVtb3ZlQ2xhc3MoJ3RvcGxpbmVfX2J1cmdlci1pbWctYWN0aXZlJykgXHJcbiAgICAgJCgnLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgICQoJy5vdmVybGF5JykuaGlkZSgpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5hZGRDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKTtcclxuICAgICAkKCcubW9kYWwnKS5hZGRDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcclxuICAgICAkKCcub3ZlcmxheScpLnNob3coKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuXHJcblxyXG59KVxyXG5cclxuIl19