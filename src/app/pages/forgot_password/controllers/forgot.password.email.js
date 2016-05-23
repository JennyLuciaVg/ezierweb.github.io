(function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgotPasswordEmailCtrl', ForgotPasswordEmailCtrl);

    ForgotPasswordEmailCtrl.$inject = ['$http'];

    /* @ngInject */
    function ForgotPasswordEmailCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

        }
    }

})();

