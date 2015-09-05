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

    $scope.complaints = [];
    var meta = {};

    function loadComplaints(page) {
      
      ComplaintsService.get(page).then(function(complaints) {
        $scope.complaints = $scope.complaints.concat(complaints.results);
        meta = {
          total: complaints.results,
          next: complaints.next,
          previous: complaints.previous
        };
      });
    }

    loadComplaints(1);

    $scope.loadNextPage = function() {
      
      if(!meta.next) {
        return;
      }
      var page = parseInt(meta.next.split('?page=')[1], 10);
      loadComplaints(page);
    };

    function fixWidth(items) {
      // we ensure that all element have the same width
      var maxWidth = '', w;

      for(var i = 0; i < items.length; i++) {
        w = $(items[i]).css('width');
        maxWidth = maxWidth < w ? w : maxWidth;
      }
      maxWidth = parseInt(maxWidth.substr(0, maxWidth.search('px')), 10);
      $('.item .pin').css('width', (maxWidth - 4) + 'px');

      // also fix frame height based on last item
      var lastItem = $(items[items.length - 1]);
      var top = parseInt(lastItem.css('top').replace('px', ''), 10);
      var height = parseInt(lastItem.css('height').replace('px', ''), 10);
      $('.frame').css('height', (top + height) + 'px');
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
