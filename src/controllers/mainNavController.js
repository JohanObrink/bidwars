
(function() {

  'use strict';

  var MainNavController = function($scope) {
    
    $scope.items = [
      { name: 'Home', href: '/' },
      { name: 'Settings', href: '/settings/' }
    ];

  };

  angular.module('app').controller('MainNavController', MainNavController);

})();
