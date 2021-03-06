(function () {
    'use strict';

    angular
        .module('app')
        .factory('oAuthLogout', oAuthLogout);

    oAuthLogout.$inject = ['$window'];

    /* @ngInject */
    function oAuthLogout($window) {
        return service;

        ////////////////

        function service() {
            delete $window.sessionStorage.token;
        }
    }

})();

