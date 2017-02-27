(function(){
  'use strict';

  angular.module('app').component('search', {
    controller: controller,
    templateUrl: '/js/search/search.template.html'
  })
  function controller() {
    this.$onInit = onInit;

    function onInit() {
    }
  }
}())
