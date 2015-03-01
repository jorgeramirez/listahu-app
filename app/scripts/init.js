'use strict';

/**
 * Bootstrap the application 
 **/
(function($, angular) {

  angular.element(document).ready(function () {
    
    $.getJSON('/config.json', function(configs) {
      
      angular.module('ListaHuApp').factory('Config',
        function () {
          return configs;
        });
      
      angular.bootstrap('#ListaHuApp', ['ListaHuApp']);
    });
  });
}(jQuery, angular));
