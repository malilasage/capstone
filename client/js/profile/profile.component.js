(function(){
  'use strict';

  angular.module('app').component('profile', {
    controller: controller,
    templateUrl: '/js/profile/profile.template.html'
  })
  function controller() {
    this.$onInit = onInit;

    function onInit() {
    }
  }
}())
