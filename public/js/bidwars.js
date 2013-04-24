/*! bidwars - v0.0.1 - 2013-04-24 */
(function() {

  'use strict';

  angular.module('app', []);

})();

(function() {

  'use strict';

  var AppController = function($scope) {
    $scope.app = {
      name: 'Bidwars'
    };
  };

  angular.module('app').controller('AppController', AppController);

})();


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

