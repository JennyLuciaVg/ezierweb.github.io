(function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgotPasswordResetCtrl', ForgotPasswordResetCtrl);

    ForgotPasswordResetCtrl.$inject = ['$stateParams','$scope'];

    /* @ngInject */
    function ForgotPasswordResetCtrl($stateParams,$scope) {
        var vm = this;
        vm.user = {
            token: $stateParams.token,
            email: $stateParams.email
        };
        window.onload = function() {
            if(navigator.userAgent.match(/Android/i)) {
                window.location = "ezierapp://?token="+vm.user.token+"&email="+vm.user.email;
                /*setTimeout(function(){
                    window.location = "market://details?id=com.ionicframework.ezfindermobile168415";
                }, 50);*/
            }
        };
        activate();
        function activate() {
        }
    }

})();