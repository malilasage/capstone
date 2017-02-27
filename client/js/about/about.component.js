(function(){
  'use strict';

  angular.module('app').component('about', {
    controller: controller,
    templateUrl: '/js/about/about.template.html'
  })
  function controller() {
    this.$onInit = onInit;

    function onInit() {
    }
  }
}())
