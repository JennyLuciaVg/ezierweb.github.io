(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$http', '$state', 'toaster', '$stateParams', 'oAuthLogin'];

    /* @ngInject */
    function RegisterCtrl($http, $state, toaster, $stateParams, oAuthLogin) {

        var accountId = $stateParams.accountId;

        var vm = this;
        vm.title = 'RegisterCtrl';
        vm.user = {
            email: 'test@company.com',
            password: 'secret',
            account_type_id: 1,
            is_generated_password: 0
        };

        vm.submit = function () {
            $http.post('api/users', vm.user).then(success);

            function success(res) {
                var user = {
                    username: vm.user.email,
                    password: vm.user.password
                };
                var account_id = res.data.account_id;
                oAuthLogin(user).then(function(){
                    if(accountId != null){
                        $http.patch('api/accounts/'+accountId+'/contacts/'+account_id).then(function() {
                            $http.put('api/accounts/'+accountId+'/connections').then(function() {
                                toaster.success('Registered successfully');
                                $state.go('index.requests_quotes');
                            });
                        });
                    }else{
                        toaster.success('Registered successfully');
                        $state.go('index.requests_quotes');
                    }
                });
            }
        };

        activate();

        ////////////////

        function activate() {

        }
    }

})();