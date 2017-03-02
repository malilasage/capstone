(function(){
  'use strict';

  angular.module('app').component('app', {
    controller: controller,
    templateUrl: '/js/app/app.template.html'
  })

  function controller($state) {

    this.$onInit = onInit;

    function onInit() {
      var user = {
        loggedIn: false
      }

      $state.go(user.loggedIn ? 'dashboard' : 'landing');
    }
  }
}());
