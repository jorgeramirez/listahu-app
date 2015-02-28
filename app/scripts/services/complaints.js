'use strict';

/**
 * @ngdoc service
 * @name ListaHuApp.Complaints
 * @description
 * # Complaints service
 * Factory in the ListaHuApp.
 */

angular.module('ListaHuApp').factory('ComplaintsService',

  function ($resource, Config) {
      var ComplaintsService = $resource('/denuncias.json', {}, {
      //var ComplaintsService = $resource(Config.apiURL + '/denuncias/', {}, {
        query: {
          method: 'GET', isArray: true
        }
      });
      
      return ComplaintsService;
  });
