(function() {
  'use strict';

  angular.module('app').directive('popup', function() {
   return {
      restrict: 'E',
      scope: {
        show: '=',
        jobData: '='
      },
      replace: true,
      transclude: true,
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
      },
      template:` <div class='ng-modal' ng-show='show'>
        <div class='ng-modal-overlay' ng-click='$ctrl.hideModal()'></div>
        <div class='ng-modal-dialog' ng-style='dialogStyle' job-data="jobData">
        cool {{ jobData }}
          <div class='ng-modal-close' ng-click='$ctrl.hideModal()'>X</div>
          <div class='ng-modal-dialog-content' ng-transclude></div>
        </div></div>`
    };
  })
}())
