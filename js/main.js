// Переменные
	$(document).ready(function(){
		var pull = $("#navigation-toggle");
		var nav = $("#mobile-nav");
		//События при нажатии на кнопку
		$(pull).on("click", function(e){
			//Отменяет стандартное поведение в браузере 
			e.preventDefault();
			//Открываем или скрываем меню
			$(nav).slideToggle();

			// Добавляем модификатор --active
	    $(this).toggleClass('navigation__toggle-button--active');

		});
		//При изменении размера окна, в большую сторону, если меню было скрыто показывает его.
		$(window).resize(function(){
			var w = $(window).width();
			if(w > 992){
				nav.removeAttr('style');
			}
		});	
	});