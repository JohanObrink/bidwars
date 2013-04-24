
(function() {

  'use strict';

  var AppController = function($scope) {
    $scope.app = {
      name: 'Bidwars'
    };
  };

  angular.module('app').controller('AppController', AppController);

})();
