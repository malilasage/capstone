(function() {
  'use strict';

  angular.module('app').directive('popup', ['$http', '$compile', function($http, $compile) {
   return {
      // restrict: 'C',
      scope: {
        // show: '=',
        jobData: '='
      },
      // replace: true,
      // transclude: true,
            // link: function(scope, element, attrs){
            //     var template, $element, loader;

                // loader = $http.get('/js/app/popUp.template.html')
                //         .success(function(data) {
                //             template = data;
                //         });
                //
                // loader.then(function() {
                //     $element = angular.element($compile(template)(scope));
                // });


                // loader = $http.get('/js/app/popUp.template.html').then((data) => {
                //   template = data;
                // })
                //   console.log(data);
                //   scope.dialogStyle = {};
                //   if (attrs.width)
                //     scope.dialogStyle.width = attrs.width;
                //   if (attrs.height)
                //     scope.dialogStyle.height = attrs.height;
                //   scope.hideModal = function() {
                //     scope.show = false;
                //   };
                //   $element = angular.element($compile(data)(scope));


                // scope.close = function() {
                //     $element.modal('hide');
                // };

                // element.on('click', function(e) {
                //     e.preventDefault();
                //     $element.modal('show');
                // });

            // }
      link: function(scope, element, attrs) {
        // scope.dialogStyle = {};
        // if (attrs.width)
        //   scope.dialogStyle.width = attrs.width;
        // if (attrs.height)
        //   scope.dialogStyle.height = attrs.height;
        // scope.hideModal = function() {
        //   scope.show = false;
        // };
        // console.log(scope.jobData);
        // console.log(this.template);
        var $element = angular.element($compile(this.template)(scope));
        console.log($element);
                  scope.close = function() {
                    $element.sickk('hide');
                };
                element.show = false;
        element.on('click', function(e) {
          console.log('clicked');
          e.preventDefault();
          // $element.sickk('show');
          $element.show = false;
        })
      },
      template:` <div class='sickk hidden'>
        <div class='ng-modal-dialog' ng-style='dialogStyle'>
        cool {{ jobData }}
          <div class='ng-modal-close'>X</div>
          <div class='ng-modal-dialog-content'>{{ jobData }}</div>
        </div></div>`
    };
  }])
}())
