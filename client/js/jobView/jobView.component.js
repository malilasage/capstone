(function(){
  'use strict';

  angular.module('app').component('jobView', {
    controller: controller,
    templateUrl: '/js/jobView/jobView.template.html'
  })
  function controller() {
    this.$onInit = onInit;

    function onInit() {
    }
  }
}());
