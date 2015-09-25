'use strict';

/**
 * @ngdoc function
 * @name hintApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hintApp
 */
angular.module('hintApp')
  .controller('MainCtrl', function () {
    
    var height = jQuery('header').height();
	var nav = jQuery("#nav");
	jQuery(window).bind("scroll", function(e) {
	    //console.log('body', jQuery('body').scrollTop());
	  if (jQuery('body').scrollTop() > height-110) {
	    nav.addClass("fix");
	  }
	  else {
	    nav.removeClass("fix");
	  }
	  
	});
  });
