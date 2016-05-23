(function () {
    'use strict';

    angular
        .module('oauth')
        .factory('oAuthLogin', oAuthLogin);

    oAuthLogin.$inject = ['$http', 'oAuth', '$q', '$window'];

    /* @ngInject */
    function oAuthLogin($http, oAuth, $q, $window) {
        return service;

        ////////////////

        function service(credentials) {

            validate(oAuth.conf);

            return $q(function(resolve, reject){
                $http({
                    method : 'POST',
                    url    : oAuth.conf.apiPath + oAuth.conf.loginPath,
                    data   : {
                        username     : credentials.username,
                        password     : credentials.password,
                        client_id    : oAuth.conf.clientId
                    }
                }).then(function (res) {
                    $window.sessionStorage.token = res.data.oauth.accessToken;
                    $window.sessionStorage.userId = res.data.user_id;
                    $window.sessionStorage.accountId = res.data.account_id;
                    resolve(res);
                }, function (res) {
                    reject(res);
                });
            });
        }
    }

    function validate(config) {
        //check if loginState param is defined
        if (config.loginState == null) {
            throw new OAuthException('You must define the loginState param');
        }
    }

})();

