'use strict'

const $li = $('.nav__li')
const $nav = $('.nav')
const $menu = $('.menu-toggle')
const $contact = $('.contact')
const $char__li = $('.time-line__li')

menuToggle($menu, $nav, 'ver')
efectoScroll($contact, 'ver', 25)
hoverMouse($char__li, 'over')

for (const cadaSection of $('.trans-1')) {
	efectoScroll(cadaSection, 'ver', 1.3)
	efectoScroll(cadaSection, 'opa', 25)
}
for (const cadaSection of $('.animation-1.stop')) {
	efectoScroll(cadaSection, 'opa', 10)
}
function menuToggle($menu, $nav , $clase) {
	$($menu).on('click', function () {
		$(this).toggleClass($clase)
		$($nav).toggleClass($clase)
	})

	$li.on({
		click: function () {
			$nav.removeClass('ver')
			$menu.removeClass('ver')
		},
	})
}
function hoverMouse($elemento, clase) {
	$elemento.on({
		mouseover: function () {
			let $i = $elemento.index($(this))
			$elemento.eq($i).addClass(clase)
		},
		mouseout: function () {
			$elemento.removeClass(clase)
		},
	})
}
function efectoScroll($elemento, $clase, $momento) {
	let $pixel
	let $distanciaVertical
	$(window).on({
		scroll: function () {
			let alturaVentana = $(window).height()
			$pixel = $(window).scrollTop()
			$distanciaVertical = $($elemento).offset().top
			if ($pixel >= $distanciaVertical - alturaVentana / $momento) {
				$($elemento).addClass($clase)
			} else {
				$($elemento).removeClass($clase)
			}
		},
	})
	$(window).on({
		resize: function () {
			$distanciaVertical = $($elemento).offset().top
			alturaVentana = $(window).height()
		},
	})
}
