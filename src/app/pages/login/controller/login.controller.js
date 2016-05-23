(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$http'];

    /* @ngInject */
    function LoginCtrl($http) {
        var vm = this;
        vm.title = 'LoginCtrl';
        vm.user = {
            username: 'admin@company.com',
            password: 'secret'
        };

        activate();

        ////////////////

        function activate() {

        }
    }

})();