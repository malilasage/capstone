(function(){
  'use strict';
  console.log('component');
  angular.module('app').component('app', {
    controller: controller,
    templateUrl: '/js/app/app.template.html'
  })
  function controller() {
    console.log('controller')
    this.$onInit = onInit;

    function onInit() {
      console.log('init');
    }
  }
}())
