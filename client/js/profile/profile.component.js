(function(){
  'use strict';

  angular.module('app').component('profile', {
    controller: controller,
    templateUrl: '/js/profile/profile.template.html',
    bindings: {
      user: '<'
    }
  })

  controller.$inject = ['$userService'];

  function controller($userService) {

    const vm = this;

    vm.$onInit = onInit;

    function onInit() {
    }
  }
}())
