(function(){
  'use strict';

  angular.module('app').component('dashboard', {
    controller: controller,
    templateUrl: '/js/dashboard/dashboard.template.html'
  })

  function controller() {

    this.$onInit = onInit;

    function onInit() {
    }
  }
}());
