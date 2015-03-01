'use strict';

/**
 * @ngdoc function
 * @name ListaHuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ListaHuApp
 */
angular.module('ListaHuApp')
  .controller('MainCtrl', function ($scope, ComplaintsService) {

    var complaints = ComplaintsService.query();
    $scope.complaints = complaints;

    function fixWidth(items) {
      // we ensure that all element have the same width
      var maxWidth = "", w;

      for(var i = 0; i < items.length; i++) {
        w = $(items[i]).css('width');
        maxWidth = maxWidth < w ? w : maxWidth; 
      }
      maxWidth = parseInt(maxWidth.substr(0, maxWidth.search('px')));
      $('.item .pin').css('width', (maxWidth - 4) + 'px');
    }

    $scope.$on('ngRepeatAfterRender', function() {
      var items = $('.item');
      if(items.length) {
        var item = $(items[0]);
        $('.isotope').pinterest_grid({
          no_columns: 2,
          single_column_breakpoint: item.width()
        });
        // fix width of all elements in the grid
        fixWidth(items);

        $(window).resize(function() {
            setTimeout( function () {
                fixWidth(items);
            }, 10);
        });
      }
    });
  });
