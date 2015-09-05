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

      var Complaints = $resource(Config.API_URL + '/denuncias/');
      return {
        get: function(page) {
          return Complaints.get({page: page}).$promise;
        }
      };
  });
