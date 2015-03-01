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

      var ComplaintsService = $resource(Config.API_URL + '/denuncias/', {}, {
        query: {
          method: 'GET', 
          isArray: true, 
          transformResponse: function(response) {
            var data = angular.fromJson(response);
            return data.results;
          }
        }
      });
      return ComplaintsService;
  });
