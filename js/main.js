	$(document).ready(function() {

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#navigation-toggle');
	var menu = $('#mobile-nav');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass('navigation__toggle-button--active');
	    
	});

	// При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	    } else {

	    }
	});

<<<<<<< HEAD
		// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav.mobile-navigation a').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};
=======
	var w =  $(window).width();
	if ( w < 992 ) {
		$('nav.mobile-navigation a').on("click", function(){
			menu.slideToggle();
		});
	}
>>>>>>> 4b9281700b14db1e1da3cb1dfcbd211888864a5f

	// Вызов слайдера owl-carousel
	$("#owlCarousel").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",  
		navigationText : ["",""],
		slideSpeed: 1000
	});

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	highlightSelector:"nav a"
	});
});








			