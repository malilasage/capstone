(function() {
  'use strict';

  angular.module('app').directive('popup', ['$http', '$compile', function($http, $compile) {
   return {
      restrict: 'E',
      scope: {
        show: '=',
        jobData: '='
      },
      replace: true,
      transclude: true,
            // link: function(scope, element, attrs){
            //     var template, $element;
            //
            //     // loader = $http.get('/js/app/popUp.template.html')
            //     //         .success(function(data) {
            //     //             template = data;
            //     //         });
            //     //
            //     // loader.then(function() {
            //     //     $element = angular.element($compile(template)(scope));
            //     // });
            //
            //
            //     $http.get('/js/app/popUp.template.html').then((data) => {
            //       console.log(data);
            //       scope.dialogStyle = {};
            //       if (attrs.width)
            //         scope.dialogStyle.width = attrs.width;
            //       if (attrs.height)
            //         scope.dialogStyle.height = attrs.height;
            //       scope.hideModal = function() {
            //         scope.show = false;
            //       };
            //       $element = angular.element($compile(data)(scope));
            //     })
            //
            //     // scope.close = function() {
            //     //     $element.modal('hide');
            //     // };
            //
            //     // element.on('click', function(e) {
            //     //     e.preventDefault();
            //     //     $element.modal('show');
            //     // });
            //
            // }
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
          scope.show = false;
        };
        console.log(scope.jobData);
        // console.log(this.template);
        
      },
      template:` <div class='ng-modal' ng-show='show'>
        <div class='ng-modal-overlay' ng-click='$ctrl.togglePopup()'></div>
        <div class='ng-modal-dialog' ng-style='dialogStyle'>
        cool {{ jobData }}
          <div class='ng-modal-close' ng-click='$ctrl.togglePopup()'>X</div>
          <div class='ng-modal-dialog-content' ng-transclude>{{ jobData.title }}</div>
        </div></div>`
    };
  }])
}())
