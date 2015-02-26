'use strict';

/**
 * @ngdoc function
 * @name ListaHuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ListaHuApp
 */
angular.module('ListaHuApp')
  .controller('MainCtrl', function ($scope) {

    $(function() {
        $('.isotope').isotope({
          layoutMode: 'packery',
          itemSelector: '.item'
        });
    });
  });
