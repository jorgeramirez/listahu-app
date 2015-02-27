'use strict';

/**
 * @ngdoc directive
 * @name ListaHuApp.directive:onFinishRender
 * @description
 * # onFinishRender
 */
angular.module('ListaHuApp')
  .directive('onFinishRender', function ($timeout) {
    
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
                
        if(scope.$last === true) {
          $timeout(function() {
            scope.$emit('ngRepeatAfterRender');
          });
        }
      }
    };
  });
