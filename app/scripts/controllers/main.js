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
    
    function fixWidth(item) {
      var width = item.css('width');
      width = parseInt(width.substr(0, width.search('px')));
      item.find('.pin').css('width', (width - 4) + 'px');
    }

    $scope.$on('ngRepeatAfterRender', function() {
      var resizeFinish;
      var items = $('.item');
      if(items.length) {
        var item = $(items[0]);
        $('.isotope').pinterest_grid({
          no_columns: 2,
          single_column_breakpoint: item.width()
        });

        // fix the width of the first element of the 
        // pinterest-like grid
        fixWidth(item);

        $(window).resize(function() {
            clearTimeout(fixWidth);
            resizeFinish = setTimeout( function () {
                fixWidth(item);
            }, 11);
        });
      }
    });
  });
