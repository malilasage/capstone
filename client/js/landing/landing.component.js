(function(){
  'use strict';

  angular.module('app').component('landing', {
    controller: controller,
    templateUrl: '/js/landing/landing.template.html'
  })
  function controller() {

    const vm = this;

    vm.$onInit = onInit;
    vm.toggleSignUp = toggleSignUp;
    vm.toggleLogIn = toggleLogIn;

    function onInit() {
    }

    function toggleSignUp() {
      vm.openSignUp = !vm.openSignUp;
    }

    function toggleLogIn() {
      vm.openLogIn = !vm.openLogIn;
    }
  }
}())
