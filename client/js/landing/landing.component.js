(function(){
  'use strict';

  angular.module('app').component('landing', {
    controller: controller,
    templateUrl: '/js/landing/landing.template.html'
  })
  function controller() {

    this.$onInit = onInit;

    function onInit() {
    }
  }
}())
