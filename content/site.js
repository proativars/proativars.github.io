(function (window, undefined) {

	"use strict";

	window.ShowWings = function () {
		$('#fundoWings').animate({'opacity': 0.9}, 3000, function(){window.HideWings()});
		$('#fundo').css('min-height', $('body').css('height'));
	}

	window.HideWings = function () {
		$('#fundoWings').animate({'opacity': 0.1}, 3000, function(){window.ShowWings()});
		$('#fundo').css('min-height', $('body').css('height'));
	}

	$(document).ready(function () {
		window.ShowWings();
	});

   

}(window));
